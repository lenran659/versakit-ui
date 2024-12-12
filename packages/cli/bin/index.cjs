#!/usr/bin/env node
'use strict';

var require$$0 = require('node:events');
var require$$1 = require('node:child_process');
var require$$2 = require('node:path');
var require$$3 = require('node:fs');
var require$$4 = require('node:process');
var require$$0$2 = require('util');
var require$$0$1 = require('os');
var require$$0$5 = require('fs');
var require$$0$3 = require('constants');
var require$$0$4 = require('stream');
var require$$5 = require('assert');
var require$$1$1 = require('path');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var commander$1 = {};

var argument = {};

var error = {};

/**
 * CommanderError class
 */

var hasRequiredError;

function requireError () {
	if (hasRequiredError) return error;
	hasRequiredError = 1;
	class CommanderError extends Error {
	  /**
	   * Constructs the CommanderError class
	   * @param {number} exitCode suggested exit code which could be used with process.exit
	   * @param {string} code an id string representing the error
	   * @param {string} message human-readable description of the error
	   */
	  constructor(exitCode, code, message) {
	    super(message);
	    // properly capture stack trace in Node.js
	    Error.captureStackTrace(this, this.constructor);
	    this.name = this.constructor.name;
	    this.code = code;
	    this.exitCode = exitCode;
	    this.nestedError = undefined;
	  }
	}

	/**
	 * InvalidArgumentError class
	 */
	class InvalidArgumentError extends CommanderError {
	  /**
	   * Constructs the InvalidArgumentError class
	   * @param {string} [message] explanation of why argument is invalid
	   */
	  constructor(message) {
	    super(1, 'commander.invalidArgument', message);
	    // properly capture stack trace in Node.js
	    Error.captureStackTrace(this, this.constructor);
	    this.name = this.constructor.name;
	  }
	}

	error.CommanderError = CommanderError;
	error.InvalidArgumentError = InvalidArgumentError;
	return error;
}

var hasRequiredArgument;

function requireArgument () {
	if (hasRequiredArgument) return argument;
	hasRequiredArgument = 1;
	const { InvalidArgumentError } = requireError();

	class Argument {
	  /**
	   * Initialize a new command argument with the given name and description.
	   * The default is that the argument is required, and you can explicitly
	   * indicate this with <> around the name. Put [] around the name for an optional argument.
	   *
	   * @param {string} name
	   * @param {string} [description]
	   */

	  constructor(name, description) {
	    this.description = description || '';
	    this.variadic = false;
	    this.parseArg = undefined;
	    this.defaultValue = undefined;
	    this.defaultValueDescription = undefined;
	    this.argChoices = undefined;

	    switch (name[0]) {
	      case '<': // e.g. <required>
	        this.required = true;
	        this._name = name.slice(1, -1);
	        break;
	      case '[': // e.g. [optional]
	        this.required = false;
	        this._name = name.slice(1, -1);
	        break;
	      default:
	        this.required = true;
	        this._name = name;
	        break;
	    }

	    if (this._name.length > 3 && this._name.slice(-3) === '...') {
	      this.variadic = true;
	      this._name = this._name.slice(0, -3);
	    }
	  }

	  /**
	   * Return argument name.
	   *
	   * @return {string}
	   */

	  name() {
	    return this._name;
	  }

	  /**
	   * @package
	   */

	  _concatValue(value, previous) {
	    if (previous === this.defaultValue || !Array.isArray(previous)) {
	      return [value];
	    }

	    return previous.concat(value);
	  }

	  /**
	   * Set the default value, and optionally supply the description to be displayed in the help.
	   *
	   * @param {*} value
	   * @param {string} [description]
	   * @return {Argument}
	   */

	  default(value, description) {
	    this.defaultValue = value;
	    this.defaultValueDescription = description;
	    return this;
	  }

	  /**
	   * Set the custom handler for processing CLI command arguments into argument values.
	   *
	   * @param {Function} [fn]
	   * @return {Argument}
	   */

	  argParser(fn) {
	    this.parseArg = fn;
	    return this;
	  }

	  /**
	   * Only allow argument value to be one of choices.
	   *
	   * @param {string[]} values
	   * @return {Argument}
	   */

	  choices(values) {
	    this.argChoices = values.slice();
	    this.parseArg = (arg, previous) => {
	      if (!this.argChoices.includes(arg)) {
	        throw new InvalidArgumentError(
	          `Allowed choices are ${this.argChoices.join(', ')}.`,
	        );
	      }
	      if (this.variadic) {
	        return this._concatValue(arg, previous);
	      }
	      return arg;
	    };
	    return this;
	  }

	  /**
	   * Make argument required.
	   *
	   * @returns {Argument}
	   */
	  argRequired() {
	    this.required = true;
	    return this;
	  }

	  /**
	   * Make argument optional.
	   *
	   * @returns {Argument}
	   */
	  argOptional() {
	    this.required = false;
	    return this;
	  }
	}

	/**
	 * Takes an argument and returns its human readable equivalent for help usage.
	 *
	 * @param {Argument} arg
	 * @return {string}
	 * @private
	 */

	function humanReadableArgName(arg) {
	  const nameOutput = arg.name() + (arg.variadic === true ? '...' : '');

	  return arg.required ? '<' + nameOutput + '>' : '[' + nameOutput + ']';
	}

	argument.Argument = Argument;
	argument.humanReadableArgName = humanReadableArgName;
	return argument;
}

var command = {};

var help = {};

var hasRequiredHelp;

function requireHelp () {
	if (hasRequiredHelp) return help;
	hasRequiredHelp = 1;
	const { humanReadableArgName } = requireArgument();

	/**
	 * TypeScript import types for JSDoc, used by Visual Studio Code IntelliSense and `npm run typescript-checkJS`
	 * https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#import-types
	 * @typedef { import("./argument.js").Argument } Argument
	 * @typedef { import("./command.js").Command } Command
	 * @typedef { import("./option.js").Option } Option
	 */

	// Although this is a class, methods are static in style to allow override using subclass or just functions.
	class Help {
	  constructor() {
	    this.helpWidth = undefined;
	    this.sortSubcommands = false;
	    this.sortOptions = false;
	    this.showGlobalOptions = false;
	  }

	  /**
	   * Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
	   *
	   * @param {Command} cmd
	   * @returns {Command[]}
	   */

	  visibleCommands(cmd) {
	    const visibleCommands = cmd.commands.filter((cmd) => !cmd._hidden);
	    const helpCommand = cmd._getHelpCommand();
	    if (helpCommand && !helpCommand._hidden) {
	      visibleCommands.push(helpCommand);
	    }
	    if (this.sortSubcommands) {
	      visibleCommands.sort((a, b) => {
	        // @ts-ignore: because overloaded return type
	        return a.name().localeCompare(b.name());
	      });
	    }
	    return visibleCommands;
	  }

	  /**
	   * Compare options for sort.
	   *
	   * @param {Option} a
	   * @param {Option} b
	   * @returns {number}
	   */
	  compareOptions(a, b) {
	    const getSortKey = (option) => {
	      // WYSIWYG for order displayed in help. Short used for comparison if present. No special handling for negated.
	      return option.short
	        ? option.short.replace(/^-/, '')
	        : option.long.replace(/^--/, '');
	    };
	    return getSortKey(a).localeCompare(getSortKey(b));
	  }

	  /**
	   * Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
	   *
	   * @param {Command} cmd
	   * @returns {Option[]}
	   */

	  visibleOptions(cmd) {
	    const visibleOptions = cmd.options.filter((option) => !option.hidden);
	    // Built-in help option.
	    const helpOption = cmd._getHelpOption();
	    if (helpOption && !helpOption.hidden) {
	      // Automatically hide conflicting flags. Bit dubious but a historical behaviour that is convenient for single-command programs.
	      const removeShort = helpOption.short && cmd._findOption(helpOption.short);
	      const removeLong = helpOption.long && cmd._findOption(helpOption.long);
	      if (!removeShort && !removeLong) {
	        visibleOptions.push(helpOption); // no changes needed
	      } else if (helpOption.long && !removeLong) {
	        visibleOptions.push(
	          cmd.createOption(helpOption.long, helpOption.description),
	        );
	      } else if (helpOption.short && !removeShort) {
	        visibleOptions.push(
	          cmd.createOption(helpOption.short, helpOption.description),
	        );
	      }
	    }
	    if (this.sortOptions) {
	      visibleOptions.sort(this.compareOptions);
	    }
	    return visibleOptions;
	  }

	  /**
	   * Get an array of the visible global options. (Not including help.)
	   *
	   * @param {Command} cmd
	   * @returns {Option[]}
	   */

	  visibleGlobalOptions(cmd) {
	    if (!this.showGlobalOptions) return [];

	    const globalOptions = [];
	    for (
	      let ancestorCmd = cmd.parent;
	      ancestorCmd;
	      ancestorCmd = ancestorCmd.parent
	    ) {
	      const visibleOptions = ancestorCmd.options.filter(
	        (option) => !option.hidden,
	      );
	      globalOptions.push(...visibleOptions);
	    }
	    if (this.sortOptions) {
	      globalOptions.sort(this.compareOptions);
	    }
	    return globalOptions;
	  }

	  /**
	   * Get an array of the arguments if any have a description.
	   *
	   * @param {Command} cmd
	   * @returns {Argument[]}
	   */

	  visibleArguments(cmd) {
	    // Side effect! Apply the legacy descriptions before the arguments are displayed.
	    if (cmd._argsDescription) {
	      cmd.registeredArguments.forEach((argument) => {
	        argument.description =
	          argument.description || cmd._argsDescription[argument.name()] || '';
	      });
	    }

	    // If there are any arguments with a description then return all the arguments.
	    if (cmd.registeredArguments.find((argument) => argument.description)) {
	      return cmd.registeredArguments;
	    }
	    return [];
	  }

	  /**
	   * Get the command term to show in the list of subcommands.
	   *
	   * @param {Command} cmd
	   * @returns {string}
	   */

	  subcommandTerm(cmd) {
	    // Legacy. Ignores custom usage string, and nested commands.
	    const args = cmd.registeredArguments
	      .map((arg) => humanReadableArgName(arg))
	      .join(' ');
	    return (
	      cmd._name +
	      (cmd._aliases[0] ? '|' + cmd._aliases[0] : '') +
	      (cmd.options.length ? ' [options]' : '') + // simplistic check for non-help option
	      (args ? ' ' + args : '')
	    );
	  }

	  /**
	   * Get the option term to show in the list of options.
	   *
	   * @param {Option} option
	   * @returns {string}
	   */

	  optionTerm(option) {
	    return option.flags;
	  }

	  /**
	   * Get the argument term to show in the list of arguments.
	   *
	   * @param {Argument} argument
	   * @returns {string}
	   */

	  argumentTerm(argument) {
	    return argument.name();
	  }

	  /**
	   * Get the longest command term length.
	   *
	   * @param {Command} cmd
	   * @param {Help} helper
	   * @returns {number}
	   */

	  longestSubcommandTermLength(cmd, helper) {
	    return helper.visibleCommands(cmd).reduce((max, command) => {
	      return Math.max(max, helper.subcommandTerm(command).length);
	    }, 0);
	  }

	  /**
	   * Get the longest option term length.
	   *
	   * @param {Command} cmd
	   * @param {Help} helper
	   * @returns {number}
	   */

	  longestOptionTermLength(cmd, helper) {
	    return helper.visibleOptions(cmd).reduce((max, option) => {
	      return Math.max(max, helper.optionTerm(option).length);
	    }, 0);
	  }

	  /**
	   * Get the longest global option term length.
	   *
	   * @param {Command} cmd
	   * @param {Help} helper
	   * @returns {number}
	   */

	  longestGlobalOptionTermLength(cmd, helper) {
	    return helper.visibleGlobalOptions(cmd).reduce((max, option) => {
	      return Math.max(max, helper.optionTerm(option).length);
	    }, 0);
	  }

	  /**
	   * Get the longest argument term length.
	   *
	   * @param {Command} cmd
	   * @param {Help} helper
	   * @returns {number}
	   */

	  longestArgumentTermLength(cmd, helper) {
	    return helper.visibleArguments(cmd).reduce((max, argument) => {
	      return Math.max(max, helper.argumentTerm(argument).length);
	    }, 0);
	  }

	  /**
	   * Get the command usage to be displayed at the top of the built-in help.
	   *
	   * @param {Command} cmd
	   * @returns {string}
	   */

	  commandUsage(cmd) {
	    // Usage
	    let cmdName = cmd._name;
	    if (cmd._aliases[0]) {
	      cmdName = cmdName + '|' + cmd._aliases[0];
	    }
	    let ancestorCmdNames = '';
	    for (
	      let ancestorCmd = cmd.parent;
	      ancestorCmd;
	      ancestorCmd = ancestorCmd.parent
	    ) {
	      ancestorCmdNames = ancestorCmd.name() + ' ' + ancestorCmdNames;
	    }
	    return ancestorCmdNames + cmdName + ' ' + cmd.usage();
	  }

	  /**
	   * Get the description for the command.
	   *
	   * @param {Command} cmd
	   * @returns {string}
	   */

	  commandDescription(cmd) {
	    // @ts-ignore: because overloaded return type
	    return cmd.description();
	  }

	  /**
	   * Get the subcommand summary to show in the list of subcommands.
	   * (Fallback to description for backwards compatibility.)
	   *
	   * @param {Command} cmd
	   * @returns {string}
	   */

	  subcommandDescription(cmd) {
	    // @ts-ignore: because overloaded return type
	    return cmd.summary() || cmd.description();
	  }

	  /**
	   * Get the option description to show in the list of options.
	   *
	   * @param {Option} option
	   * @return {string}
	   */

	  optionDescription(option) {
	    const extraInfo = [];

	    if (option.argChoices) {
	      extraInfo.push(
	        // use stringify to match the display of the default value
	        `choices: ${option.argChoices.map((choice) => JSON.stringify(choice)).join(', ')}`,
	      );
	    }
	    if (option.defaultValue !== undefined) {
	      // default for boolean and negated more for programmer than end user,
	      // but show true/false for boolean option as may be for hand-rolled env or config processing.
	      const showDefault =
	        option.required ||
	        option.optional ||
	        (option.isBoolean() && typeof option.defaultValue === 'boolean');
	      if (showDefault) {
	        extraInfo.push(
	          `default: ${option.defaultValueDescription || JSON.stringify(option.defaultValue)}`,
	        );
	      }
	    }
	    // preset for boolean and negated are more for programmer than end user
	    if (option.presetArg !== undefined && option.optional) {
	      extraInfo.push(`preset: ${JSON.stringify(option.presetArg)}`);
	    }
	    if (option.envVar !== undefined) {
	      extraInfo.push(`env: ${option.envVar}`);
	    }
	    if (extraInfo.length > 0) {
	      return `${option.description} (${extraInfo.join(', ')})`;
	    }

	    return option.description;
	  }

	  /**
	   * Get the argument description to show in the list of arguments.
	   *
	   * @param {Argument} argument
	   * @return {string}
	   */

	  argumentDescription(argument) {
	    const extraInfo = [];
	    if (argument.argChoices) {
	      extraInfo.push(
	        // use stringify to match the display of the default value
	        `choices: ${argument.argChoices.map((choice) => JSON.stringify(choice)).join(', ')}`,
	      );
	    }
	    if (argument.defaultValue !== undefined) {
	      extraInfo.push(
	        `default: ${argument.defaultValueDescription || JSON.stringify(argument.defaultValue)}`,
	      );
	    }
	    if (extraInfo.length > 0) {
	      const extraDescripton = `(${extraInfo.join(', ')})`;
	      if (argument.description) {
	        return `${argument.description} ${extraDescripton}`;
	      }
	      return extraDescripton;
	    }
	    return argument.description;
	  }

	  /**
	   * Generate the built-in help text.
	   *
	   * @param {Command} cmd
	   * @param {Help} helper
	   * @returns {string}
	   */

	  formatHelp(cmd, helper) {
	    const termWidth = helper.padWidth(cmd, helper);
	    const helpWidth = helper.helpWidth || 80;
	    const itemIndentWidth = 2;
	    const itemSeparatorWidth = 2; // between term and description
	    function formatItem(term, description) {
	      if (description) {
	        const fullText = `${term.padEnd(termWidth + itemSeparatorWidth)}${description}`;
	        return helper.wrap(
	          fullText,
	          helpWidth - itemIndentWidth,
	          termWidth + itemSeparatorWidth,
	        );
	      }
	      return term;
	    }
	    function formatList(textArray) {
	      return textArray.join('\n').replace(/^/gm, ' '.repeat(itemIndentWidth));
	    }

	    // Usage
	    let output = [`Usage: ${helper.commandUsage(cmd)}`, ''];

	    // Description
	    const commandDescription = helper.commandDescription(cmd);
	    if (commandDescription.length > 0) {
	      output = output.concat([
	        helper.wrap(commandDescription, helpWidth, 0),
	        '',
	      ]);
	    }

	    // Arguments
	    const argumentList = helper.visibleArguments(cmd).map((argument) => {
	      return formatItem(
	        helper.argumentTerm(argument),
	        helper.argumentDescription(argument),
	      );
	    });
	    if (argumentList.length > 0) {
	      output = output.concat(['Arguments:', formatList(argumentList), '']);
	    }

	    // Options
	    const optionList = helper.visibleOptions(cmd).map((option) => {
	      return formatItem(
	        helper.optionTerm(option),
	        helper.optionDescription(option),
	      );
	    });
	    if (optionList.length > 0) {
	      output = output.concat(['Options:', formatList(optionList), '']);
	    }

	    if (this.showGlobalOptions) {
	      const globalOptionList = helper
	        .visibleGlobalOptions(cmd)
	        .map((option) => {
	          return formatItem(
	            helper.optionTerm(option),
	            helper.optionDescription(option),
	          );
	        });
	      if (globalOptionList.length > 0) {
	        output = output.concat([
	          'Global Options:',
	          formatList(globalOptionList),
	          '',
	        ]);
	      }
	    }

	    // Commands
	    const commandList = helper.visibleCommands(cmd).map((cmd) => {
	      return formatItem(
	        helper.subcommandTerm(cmd),
	        helper.subcommandDescription(cmd),
	      );
	    });
	    if (commandList.length > 0) {
	      output = output.concat(['Commands:', formatList(commandList), '']);
	    }

	    return output.join('\n');
	  }

	  /**
	   * Calculate the pad width from the maximum term length.
	   *
	   * @param {Command} cmd
	   * @param {Help} helper
	   * @returns {number}
	   */

	  padWidth(cmd, helper) {
	    return Math.max(
	      helper.longestOptionTermLength(cmd, helper),
	      helper.longestGlobalOptionTermLength(cmd, helper),
	      helper.longestSubcommandTermLength(cmd, helper),
	      helper.longestArgumentTermLength(cmd, helper),
	    );
	  }

	  /**
	   * Wrap the given string to width characters per line, with lines after the first indented.
	   * Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.
	   *
	   * @param {string} str
	   * @param {number} width
	   * @param {number} indent
	   * @param {number} [minColumnWidth=40]
	   * @return {string}
	   *
	   */

	  wrap(str, width, indent, minColumnWidth = 40) {
	    // Full \s characters, minus the linefeeds.
	    const indents =
	      ' \\f\\t\\v\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff';
	    // Detect manually wrapped and indented strings by searching for line break followed by spaces.
	    const manualIndent = new RegExp(`[\\n][${indents}]+`);
	    if (str.match(manualIndent)) return str;
	    // Do not wrap if not enough room for a wrapped column of text (as could end up with a word per line).
	    const columnWidth = width - indent;
	    if (columnWidth < minColumnWidth) return str;

	    const leadingStr = str.slice(0, indent);
	    const columnText = str.slice(indent).replace('\r\n', '\n');
	    const indentString = ' '.repeat(indent);
	    const zeroWidthSpace = '\u200B';
	    const breaks = `\\s${zeroWidthSpace}`;
	    // Match line end (so empty lines don't collapse),
	    // or as much text as will fit in column, or excess text up to first break.
	    const regex = new RegExp(
	      `\n|.{1,${columnWidth - 1}}([${breaks}]|$)|[^${breaks}]+?([${breaks}]|$)`,
	      'g',
	    );
	    const lines = columnText.match(regex) || [];
	    return (
	      leadingStr +
	      lines
	        .map((line, i) => {
	          if (line === '\n') return ''; // preserve empty lines
	          return (i > 0 ? indentString : '') + line.trimEnd();
	        })
	        .join('\n')
	    );
	  }
	}

	help.Help = Help;
	return help;
}

var option = {};

var hasRequiredOption;

function requireOption () {
	if (hasRequiredOption) return option;
	hasRequiredOption = 1;
	const { InvalidArgumentError } = requireError();

	class Option {
	  /**
	   * Initialize a new `Option` with the given `flags` and `description`.
	   *
	   * @param {string} flags
	   * @param {string} [description]
	   */

	  constructor(flags, description) {
	    this.flags = flags;
	    this.description = description || '';

	    this.required = flags.includes('<'); // A value must be supplied when the option is specified.
	    this.optional = flags.includes('['); // A value is optional when the option is specified.
	    // variadic test ignores <value,...> et al which might be used to describe custom splitting of single argument
	    this.variadic = /\w\.\.\.[>\]]$/.test(flags); // The option can take multiple values.
	    this.mandatory = false; // The option must have a value after parsing, which usually means it must be specified on command line.
	    const optionFlags = splitOptionFlags(flags);
	    this.short = optionFlags.shortFlag;
	    this.long = optionFlags.longFlag;
	    this.negate = false;
	    if (this.long) {
	      this.negate = this.long.startsWith('--no-');
	    }
	    this.defaultValue = undefined;
	    this.defaultValueDescription = undefined;
	    this.presetArg = undefined;
	    this.envVar = undefined;
	    this.parseArg = undefined;
	    this.hidden = false;
	    this.argChoices = undefined;
	    this.conflictsWith = [];
	    this.implied = undefined;
	  }

	  /**
	   * Set the default value, and optionally supply the description to be displayed in the help.
	   *
	   * @param {*} value
	   * @param {string} [description]
	   * @return {Option}
	   */

	  default(value, description) {
	    this.defaultValue = value;
	    this.defaultValueDescription = description;
	    return this;
	  }

	  /**
	   * Preset to use when option used without option-argument, especially optional but also boolean and negated.
	   * The custom processing (parseArg) is called.
	   *
	   * @example
	   * new Option('--color').default('GREYSCALE').preset('RGB');
	   * new Option('--donate [amount]').preset('20').argParser(parseFloat);
	   *
	   * @param {*} arg
	   * @return {Option}
	   */

	  preset(arg) {
	    this.presetArg = arg;
	    return this;
	  }

	  /**
	   * Add option name(s) that conflict with this option.
	   * An error will be displayed if conflicting options are found during parsing.
	   *
	   * @example
	   * new Option('--rgb').conflicts('cmyk');
	   * new Option('--js').conflicts(['ts', 'jsx']);
	   *
	   * @param {(string | string[])} names
	   * @return {Option}
	   */

	  conflicts(names) {
	    this.conflictsWith = this.conflictsWith.concat(names);
	    return this;
	  }

	  /**
	   * Specify implied option values for when this option is set and the implied options are not.
	   *
	   * The custom processing (parseArg) is not called on the implied values.
	   *
	   * @example
	   * program
	   *   .addOption(new Option('--log', 'write logging information to file'))
	   *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
	   *
	   * @param {object} impliedOptionValues
	   * @return {Option}
	   */
	  implies(impliedOptionValues) {
	    let newImplied = impliedOptionValues;
	    if (typeof impliedOptionValues === 'string') {
	      // string is not documented, but easy mistake and we can do what user probably intended.
	      newImplied = { [impliedOptionValues]: true };
	    }
	    this.implied = Object.assign(this.implied || {}, newImplied);
	    return this;
	  }

	  /**
	   * Set environment variable to check for option value.
	   *
	   * An environment variable is only used if when processed the current option value is
	   * undefined, or the source of the current value is 'default' or 'config' or 'env'.
	   *
	   * @param {string} name
	   * @return {Option}
	   */

	  env(name) {
	    this.envVar = name;
	    return this;
	  }

	  /**
	   * Set the custom handler for processing CLI option arguments into option values.
	   *
	   * @param {Function} [fn]
	   * @return {Option}
	   */

	  argParser(fn) {
	    this.parseArg = fn;
	    return this;
	  }

	  /**
	   * Whether the option is mandatory and must have a value after parsing.
	   *
	   * @param {boolean} [mandatory=true]
	   * @return {Option}
	   */

	  makeOptionMandatory(mandatory = true) {
	    this.mandatory = !!mandatory;
	    return this;
	  }

	  /**
	   * Hide option in help.
	   *
	   * @param {boolean} [hide=true]
	   * @return {Option}
	   */

	  hideHelp(hide = true) {
	    this.hidden = !!hide;
	    return this;
	  }

	  /**
	   * @package
	   */

	  _concatValue(value, previous) {
	    if (previous === this.defaultValue || !Array.isArray(previous)) {
	      return [value];
	    }

	    return previous.concat(value);
	  }

	  /**
	   * Only allow option value to be one of choices.
	   *
	   * @param {string[]} values
	   * @return {Option}
	   */

	  choices(values) {
	    this.argChoices = values.slice();
	    this.parseArg = (arg, previous) => {
	      if (!this.argChoices.includes(arg)) {
	        throw new InvalidArgumentError(
	          `Allowed choices are ${this.argChoices.join(', ')}.`,
	        );
	      }
	      if (this.variadic) {
	        return this._concatValue(arg, previous);
	      }
	      return arg;
	    };
	    return this;
	  }

	  /**
	   * Return option name.
	   *
	   * @return {string}
	   */

	  name() {
	    if (this.long) {
	      return this.long.replace(/^--/, '');
	    }
	    return this.short.replace(/^-/, '');
	  }

	  /**
	   * Return option name, in a camelcase format that can be used
	   * as a object attribute key.
	   *
	   * @return {string}
	   */

	  attributeName() {
	    return camelcase(this.name().replace(/^no-/, ''));
	  }

	  /**
	   * Check if `arg` matches the short or long flag.
	   *
	   * @param {string} arg
	   * @return {boolean}
	   * @package
	   */

	  is(arg) {
	    return this.short === arg || this.long === arg;
	  }

	  /**
	   * Return whether a boolean option.
	   *
	   * Options are one of boolean, negated, required argument, or optional argument.
	   *
	   * @return {boolean}
	   * @package
	   */

	  isBoolean() {
	    return !this.required && !this.optional && !this.negate;
	  }
	}

	/**
	 * This class is to make it easier to work with dual options, without changing the existing
	 * implementation. We support separate dual options for separate positive and negative options,
	 * like `--build` and `--no-build`, which share a single option value. This works nicely for some
	 * use cases, but is tricky for others where we want separate behaviours despite
	 * the single shared option value.
	 */
	class DualOptions {
	  /**
	   * @param {Option[]} options
	   */
	  constructor(options) {
	    this.positiveOptions = new Map();
	    this.negativeOptions = new Map();
	    this.dualOptions = new Set();
	    options.forEach((option) => {
	      if (option.negate) {
	        this.negativeOptions.set(option.attributeName(), option);
	      } else {
	        this.positiveOptions.set(option.attributeName(), option);
	      }
	    });
	    this.negativeOptions.forEach((value, key) => {
	      if (this.positiveOptions.has(key)) {
	        this.dualOptions.add(key);
	      }
	    });
	  }

	  /**
	   * Did the value come from the option, and not from possible matching dual option?
	   *
	   * @param {*} value
	   * @param {Option} option
	   * @returns {boolean}
	   */
	  valueFromOption(value, option) {
	    const optionKey = option.attributeName();
	    if (!this.dualOptions.has(optionKey)) return true;

	    // Use the value to deduce if (probably) came from the option.
	    const preset = this.negativeOptions.get(optionKey).presetArg;
	    const negativeValue = preset !== undefined ? preset : false;
	    return option.negate === (negativeValue === value);
	  }
	}

	/**
	 * Convert string from kebab-case to camelCase.
	 *
	 * @param {string} str
	 * @return {string}
	 * @private
	 */

	function camelcase(str) {
	  return str.split('-').reduce((str, word) => {
	    return str + word[0].toUpperCase() + word.slice(1);
	  });
	}

	/**
	 * Split the short and long flag out of something like '-m,--mixed <value>'
	 *
	 * @private
	 */

	function splitOptionFlags(flags) {
	  let shortFlag;
	  let longFlag;
	  // Use original very loose parsing to maintain backwards compatibility for now,
	  // which allowed for example unintended `-sw, --short-word` [sic].
	  const flagParts = flags.split(/[ |,]+/);
	  if (flagParts.length > 1 && !/^[[<]/.test(flagParts[1]))
	    shortFlag = flagParts.shift();
	  longFlag = flagParts.shift();
	  // Add support for lone short flag without significantly changing parsing!
	  if (!shortFlag && /^-[^-]$/.test(longFlag)) {
	    shortFlag = longFlag;
	    longFlag = undefined;
	  }
	  return { shortFlag, longFlag };
	}

	option.Option = Option;
	option.DualOptions = DualOptions;
	return option;
}

var suggestSimilar = {};

var hasRequiredSuggestSimilar;

function requireSuggestSimilar () {
	if (hasRequiredSuggestSimilar) return suggestSimilar;
	hasRequiredSuggestSimilar = 1;
	const maxDistance = 3;

	function editDistance(a, b) {
	  // https://en.wikipedia.org/wiki/Damerau–Levenshtein_distance
	  // Calculating optimal string alignment distance, no substring is edited more than once.
	  // (Simple implementation.)

	  // Quick early exit, return worst case.
	  if (Math.abs(a.length - b.length) > maxDistance)
	    return Math.max(a.length, b.length);

	  // distance between prefix substrings of a and b
	  const d = [];

	  // pure deletions turn a into empty string
	  for (let i = 0; i <= a.length; i++) {
	    d[i] = [i];
	  }
	  // pure insertions turn empty string into b
	  for (let j = 0; j <= b.length; j++) {
	    d[0][j] = j;
	  }

	  // fill matrix
	  for (let j = 1; j <= b.length; j++) {
	    for (let i = 1; i <= a.length; i++) {
	      let cost = 1;
	      if (a[i - 1] === b[j - 1]) {
	        cost = 0;
	      } else {
	        cost = 1;
	      }
	      d[i][j] = Math.min(
	        d[i - 1][j] + 1, // deletion
	        d[i][j - 1] + 1, // insertion
	        d[i - 1][j - 1] + cost, // substitution
	      );
	      // transposition
	      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
	        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
	      }
	    }
	  }

	  return d[a.length][b.length];
	}

	/**
	 * Find close matches, restricted to same number of edits.
	 *
	 * @param {string} word
	 * @param {string[]} candidates
	 * @returns {string}
	 */

	function suggestSimilar$1(word, candidates) {
	  if (!candidates || candidates.length === 0) return '';
	  // remove possible duplicates
	  candidates = Array.from(new Set(candidates));

	  const searchingOptions = word.startsWith('--');
	  if (searchingOptions) {
	    word = word.slice(2);
	    candidates = candidates.map((candidate) => candidate.slice(2));
	  }

	  let similar = [];
	  let bestDistance = maxDistance;
	  const minSimilarity = 0.4;
	  candidates.forEach((candidate) => {
	    if (candidate.length <= 1) return; // no one character guesses

	    const distance = editDistance(word, candidate);
	    const length = Math.max(word.length, candidate.length);
	    const similarity = (length - distance) / length;
	    if (similarity > minSimilarity) {
	      if (distance < bestDistance) {
	        // better edit distance, throw away previous worse matches
	        bestDistance = distance;
	        similar = [candidate];
	      } else if (distance === bestDistance) {
	        similar.push(candidate);
	      }
	    }
	  });

	  similar.sort((a, b) => a.localeCompare(b));
	  if (searchingOptions) {
	    similar = similar.map((candidate) => `--${candidate}`);
	  }

	  if (similar.length > 1) {
	    return `\n(Did you mean one of ${similar.join(', ')}?)`;
	  }
	  if (similar.length === 1) {
	    return `\n(Did you mean ${similar[0]}?)`;
	  }
	  return '';
	}

	suggestSimilar.suggestSimilar = suggestSimilar$1;
	return suggestSimilar;
}

var hasRequiredCommand;

function requireCommand () {
	if (hasRequiredCommand) return command;
	hasRequiredCommand = 1;
	const EventEmitter = require$$0.EventEmitter;
	const childProcess = require$$1;
	const path = require$$2;
	const fs = require$$3;
	const process = require$$4;

	const { Argument, humanReadableArgName } = requireArgument();
	const { CommanderError } = requireError();
	const { Help } = requireHelp();
	const { Option, DualOptions } = requireOption();
	const { suggestSimilar } = requireSuggestSimilar();

	class Command extends EventEmitter {
	  /**
	   * Initialize a new `Command`.
	   *
	   * @param {string} [name]
	   */

	  constructor(name) {
	    super();
	    /** @type {Command[]} */
	    this.commands = [];
	    /** @type {Option[]} */
	    this.options = [];
	    this.parent = null;
	    this._allowUnknownOption = false;
	    this._allowExcessArguments = true;
	    /** @type {Argument[]} */
	    this.registeredArguments = [];
	    this._args = this.registeredArguments; // deprecated old name
	    /** @type {string[]} */
	    this.args = []; // cli args with options removed
	    this.rawArgs = [];
	    this.processedArgs = []; // like .args but after custom processing and collecting variadic
	    this._scriptPath = null;
	    this._name = name || '';
	    this._optionValues = {};
	    this._optionValueSources = {}; // default, env, cli etc
	    this._storeOptionsAsProperties = false;
	    this._actionHandler = null;
	    this._executableHandler = false;
	    this._executableFile = null; // custom name for executable
	    this._executableDir = null; // custom search directory for subcommands
	    this._defaultCommandName = null;
	    this._exitCallback = null;
	    this._aliases = [];
	    this._combineFlagAndOptionalValue = true;
	    this._description = '';
	    this._summary = '';
	    this._argsDescription = undefined; // legacy
	    this._enablePositionalOptions = false;
	    this._passThroughOptions = false;
	    this._lifeCycleHooks = {}; // a hash of arrays
	    /** @type {(boolean | string)} */
	    this._showHelpAfterError = false;
	    this._showSuggestionAfterError = true;

	    // see .configureOutput() for docs
	    this._outputConfiguration = {
	      writeOut: (str) => process.stdout.write(str),
	      writeErr: (str) => process.stderr.write(str),
	      getOutHelpWidth: () =>
	        process.stdout.isTTY ? process.stdout.columns : undefined,
	      getErrHelpWidth: () =>
	        process.stderr.isTTY ? process.stderr.columns : undefined,
	      outputError: (str, write) => write(str),
	    };

	    this._hidden = false;
	    /** @type {(Option | null | undefined)} */
	    this._helpOption = undefined; // Lazy created on demand. May be null if help option is disabled.
	    this._addImplicitHelpCommand = undefined; // undecided whether true or false yet, not inherited
	    /** @type {Command} */
	    this._helpCommand = undefined; // lazy initialised, inherited
	    this._helpConfiguration = {};
	  }

	  /**
	   * Copy settings that are useful to have in common across root command and subcommands.
	   *
	   * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
	   *
	   * @param {Command} sourceCommand
	   * @return {Command} `this` command for chaining
	   */
	  copyInheritedSettings(sourceCommand) {
	    this._outputConfiguration = sourceCommand._outputConfiguration;
	    this._helpOption = sourceCommand._helpOption;
	    this._helpCommand = sourceCommand._helpCommand;
	    this._helpConfiguration = sourceCommand._helpConfiguration;
	    this._exitCallback = sourceCommand._exitCallback;
	    this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
	    this._combineFlagAndOptionalValue =
	      sourceCommand._combineFlagAndOptionalValue;
	    this._allowExcessArguments = sourceCommand._allowExcessArguments;
	    this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
	    this._showHelpAfterError = sourceCommand._showHelpAfterError;
	    this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;

	    return this;
	  }

	  /**
	   * @returns {Command[]}
	   * @private
	   */

	  _getCommandAndAncestors() {
	    const result = [];
	    // eslint-disable-next-line @typescript-eslint/no-this-alias
	    for (let command = this; command; command = command.parent) {
	      result.push(command);
	    }
	    return result;
	  }

	  /**
	   * Define a command.
	   *
	   * There are two styles of command: pay attention to where to put the description.
	   *
	   * @example
	   * // Command implemented using action handler (description is supplied separately to `.command`)
	   * program
	   *   .command('clone <source> [destination]')
	   *   .description('clone a repository into a newly created directory')
	   *   .action((source, destination) => {
	   *     console.log('clone command called');
	   *   });
	   *
	   * // Command implemented using separate executable file (description is second parameter to `.command`)
	   * program
	   *   .command('start <service>', 'start named service')
	   *   .command('stop [service]', 'stop named service, or all if no name supplied');
	   *
	   * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
	   * @param {(object | string)} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
	   * @param {object} [execOpts] - configuration options (for executable)
	   * @return {Command} returns new command for action handler, or `this` for executable command
	   */

	  command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
	    let desc = actionOptsOrExecDesc;
	    let opts = execOpts;
	    if (typeof desc === 'object' && desc !== null) {
	      opts = desc;
	      desc = null;
	    }
	    opts = opts || {};
	    const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);

	    const cmd = this.createCommand(name);
	    if (desc) {
	      cmd.description(desc);
	      cmd._executableHandler = true;
	    }
	    if (opts.isDefault) this._defaultCommandName = cmd._name;
	    cmd._hidden = !!(opts.noHelp || opts.hidden); // noHelp is deprecated old name for hidden
	    cmd._executableFile = opts.executableFile || null; // Custom name for executable file, set missing to null to match constructor
	    if (args) cmd.arguments(args);
	    this._registerCommand(cmd);
	    cmd.parent = this;
	    cmd.copyInheritedSettings(this);

	    if (desc) return this;
	    return cmd;
	  }

	  /**
	   * Factory routine to create a new unattached command.
	   *
	   * See .command() for creating an attached subcommand, which uses this routine to
	   * create the command. You can override createCommand to customise subcommands.
	   *
	   * @param {string} [name]
	   * @return {Command} new command
	   */

	  createCommand(name) {
	    return new Command(name);
	  }

	  /**
	   * You can customise the help with a subclass of Help by overriding createHelp,
	   * or by overriding Help properties using configureHelp().
	   *
	   * @return {Help}
	   */

	  createHelp() {
	    return Object.assign(new Help(), this.configureHelp());
	  }

	  /**
	   * You can customise the help by overriding Help properties using configureHelp(),
	   * or with a subclass of Help by overriding createHelp().
	   *
	   * @param {object} [configuration] - configuration options
	   * @return {(Command | object)} `this` command for chaining, or stored configuration
	   */

	  configureHelp(configuration) {
	    if (configuration === undefined) return this._helpConfiguration;

	    this._helpConfiguration = configuration;
	    return this;
	  }

	  /**
	   * The default output goes to stdout and stderr. You can customise this for special
	   * applications. You can also customise the display of errors by overriding outputError.
	   *
	   * The configuration properties are all functions:
	   *
	   *     // functions to change where being written, stdout and stderr
	   *     writeOut(str)
	   *     writeErr(str)
	   *     // matching functions to specify width for wrapping help
	   *     getOutHelpWidth()
	   *     getErrHelpWidth()
	   *     // functions based on what is being written out
	   *     outputError(str, write) // used for displaying errors, and not used for displaying help
	   *
	   * @param {object} [configuration] - configuration options
	   * @return {(Command | object)} `this` command for chaining, or stored configuration
	   */

	  configureOutput(configuration) {
	    if (configuration === undefined) return this._outputConfiguration;

	    Object.assign(this._outputConfiguration, configuration);
	    return this;
	  }

	  /**
	   * Display the help or a custom message after an error occurs.
	   *
	   * @param {(boolean|string)} [displayHelp]
	   * @return {Command} `this` command for chaining
	   */
	  showHelpAfterError(displayHelp = true) {
	    if (typeof displayHelp !== 'string') displayHelp = !!displayHelp;
	    this._showHelpAfterError = displayHelp;
	    return this;
	  }

	  /**
	   * Display suggestion of similar commands for unknown commands, or options for unknown options.
	   *
	   * @param {boolean} [displaySuggestion]
	   * @return {Command} `this` command for chaining
	   */
	  showSuggestionAfterError(displaySuggestion = true) {
	    this._showSuggestionAfterError = !!displaySuggestion;
	    return this;
	  }

	  /**
	   * Add a prepared subcommand.
	   *
	   * See .command() for creating an attached subcommand which inherits settings from its parent.
	   *
	   * @param {Command} cmd - new subcommand
	   * @param {object} [opts] - configuration options
	   * @return {Command} `this` command for chaining
	   */

	  addCommand(cmd, opts) {
	    if (!cmd._name) {
	      throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
	    }

	    opts = opts || {};
	    if (opts.isDefault) this._defaultCommandName = cmd._name;
	    if (opts.noHelp || opts.hidden) cmd._hidden = true; // modifying passed command due to existing implementation

	    this._registerCommand(cmd);
	    cmd.parent = this;
	    cmd._checkForBrokenPassThrough();

	    return this;
	  }

	  /**
	   * Factory routine to create a new unattached argument.
	   *
	   * See .argument() for creating an attached argument, which uses this routine to
	   * create the argument. You can override createArgument to return a custom argument.
	   *
	   * @param {string} name
	   * @param {string} [description]
	   * @return {Argument} new argument
	   */

	  createArgument(name, description) {
	    return new Argument(name, description);
	  }

	  /**
	   * Define argument syntax for command.
	   *
	   * The default is that the argument is required, and you can explicitly
	   * indicate this with <> around the name. Put [] around the name for an optional argument.
	   *
	   * @example
	   * program.argument('<input-file>');
	   * program.argument('[output-file]');
	   *
	   * @param {string} name
	   * @param {string} [description]
	   * @param {(Function|*)} [fn] - custom argument processing function
	   * @param {*} [defaultValue]
	   * @return {Command} `this` command for chaining
	   */
	  argument(name, description, fn, defaultValue) {
	    const argument = this.createArgument(name, description);
	    if (typeof fn === 'function') {
	      argument.default(defaultValue).argParser(fn);
	    } else {
	      argument.default(fn);
	    }
	    this.addArgument(argument);
	    return this;
	  }

	  /**
	   * Define argument syntax for command, adding multiple at once (without descriptions).
	   *
	   * See also .argument().
	   *
	   * @example
	   * program.arguments('<cmd> [env]');
	   *
	   * @param {string} names
	   * @return {Command} `this` command for chaining
	   */

	  arguments(names) {
	    names
	      .trim()
	      .split(/ +/)
	      .forEach((detail) => {
	        this.argument(detail);
	      });
	    return this;
	  }

	  /**
	   * Define argument syntax for command, adding a prepared argument.
	   *
	   * @param {Argument} argument
	   * @return {Command} `this` command for chaining
	   */
	  addArgument(argument) {
	    const previousArgument = this.registeredArguments.slice(-1)[0];
	    if (previousArgument && previousArgument.variadic) {
	      throw new Error(
	        `only the last argument can be variadic '${previousArgument.name()}'`,
	      );
	    }
	    if (
	      argument.required &&
	      argument.defaultValue !== undefined &&
	      argument.parseArg === undefined
	    ) {
	      throw new Error(
	        `a default value for a required argument is never used: '${argument.name()}'`,
	      );
	    }
	    this.registeredArguments.push(argument);
	    return this;
	  }

	  /**
	   * Customise or override default help command. By default a help command is automatically added if your command has subcommands.
	   *
	   * @example
	   *    program.helpCommand('help [cmd]');
	   *    program.helpCommand('help [cmd]', 'show help');
	   *    program.helpCommand(false); // suppress default help command
	   *    program.helpCommand(true); // add help command even if no subcommands
	   *
	   * @param {string|boolean} enableOrNameAndArgs - enable with custom name and/or arguments, or boolean to override whether added
	   * @param {string} [description] - custom description
	   * @return {Command} `this` command for chaining
	   */

	  helpCommand(enableOrNameAndArgs, description) {
	    if (typeof enableOrNameAndArgs === 'boolean') {
	      this._addImplicitHelpCommand = enableOrNameAndArgs;
	      return this;
	    }

	    enableOrNameAndArgs = enableOrNameAndArgs ?? 'help [command]';
	    const [, helpName, helpArgs] = enableOrNameAndArgs.match(/([^ ]+) *(.*)/);
	    const helpDescription = description ?? 'display help for command';

	    const helpCommand = this.createCommand(helpName);
	    helpCommand.helpOption(false);
	    if (helpArgs) helpCommand.arguments(helpArgs);
	    if (helpDescription) helpCommand.description(helpDescription);

	    this._addImplicitHelpCommand = true;
	    this._helpCommand = helpCommand;

	    return this;
	  }

	  /**
	   * Add prepared custom help command.
	   *
	   * @param {(Command|string|boolean)} helpCommand - custom help command, or deprecated enableOrNameAndArgs as for `.helpCommand()`
	   * @param {string} [deprecatedDescription] - deprecated custom description used with custom name only
	   * @return {Command} `this` command for chaining
	   */
	  addHelpCommand(helpCommand, deprecatedDescription) {
	    // If not passed an object, call through to helpCommand for backwards compatibility,
	    // as addHelpCommand was originally used like helpCommand is now.
	    if (typeof helpCommand !== 'object') {
	      this.helpCommand(helpCommand, deprecatedDescription);
	      return this;
	    }

	    this._addImplicitHelpCommand = true;
	    this._helpCommand = helpCommand;
	    return this;
	  }

	  /**
	   * Lazy create help command.
	   *
	   * @return {(Command|null)}
	   * @package
	   */
	  _getHelpCommand() {
	    const hasImplicitHelpCommand =
	      this._addImplicitHelpCommand ??
	      (this.commands.length &&
	        !this._actionHandler &&
	        !this._findCommand('help'));

	    if (hasImplicitHelpCommand) {
	      if (this._helpCommand === undefined) {
	        this.helpCommand(undefined, undefined); // use default name and description
	      }
	      return this._helpCommand;
	    }
	    return null;
	  }

	  /**
	   * Add hook for life cycle event.
	   *
	   * @param {string} event
	   * @param {Function} listener
	   * @return {Command} `this` command for chaining
	   */

	  hook(event, listener) {
	    const allowedValues = ['preSubcommand', 'preAction', 'postAction'];
	    if (!allowedValues.includes(event)) {
	      throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
	    }
	    if (this._lifeCycleHooks[event]) {
	      this._lifeCycleHooks[event].push(listener);
	    } else {
	      this._lifeCycleHooks[event] = [listener];
	    }
	    return this;
	  }

	  /**
	   * Register callback to use as replacement for calling process.exit.
	   *
	   * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
	   * @return {Command} `this` command for chaining
	   */

	  exitOverride(fn) {
	    if (fn) {
	      this._exitCallback = fn;
	    } else {
	      this._exitCallback = (err) => {
	        if (err.code !== 'commander.executeSubCommandAsync') {
	          throw err;
	        }
	      };
	    }
	    return this;
	  }

	  /**
	   * Call process.exit, and _exitCallback if defined.
	   *
	   * @param {number} exitCode exit code for using with process.exit
	   * @param {string} code an id string representing the error
	   * @param {string} message human-readable description of the error
	   * @return never
	   * @private
	   */

	  _exit(exitCode, code, message) {
	    if (this._exitCallback) {
	      this._exitCallback(new CommanderError(exitCode, code, message));
	      // Expecting this line is not reached.
	    }
	    process.exit(exitCode);
	  }

	  /**
	   * Register callback `fn` for the command.
	   *
	   * @example
	   * program
	   *   .command('serve')
	   *   .description('start service')
	   *   .action(function() {
	   *      // do work here
	   *   });
	   *
	   * @param {Function} fn
	   * @return {Command} `this` command for chaining
	   */

	  action(fn) {
	    const listener = (args) => {
	      // The .action callback takes an extra parameter which is the command or options.
	      const expectedArgsCount = this.registeredArguments.length;
	      const actionArgs = args.slice(0, expectedArgsCount);
	      if (this._storeOptionsAsProperties) {
	        actionArgs[expectedArgsCount] = this; // backwards compatible "options"
	      } else {
	        actionArgs[expectedArgsCount] = this.opts();
	      }
	      actionArgs.push(this);

	      return fn.apply(this, actionArgs);
	    };
	    this._actionHandler = listener;
	    return this;
	  }

	  /**
	   * Factory routine to create a new unattached option.
	   *
	   * See .option() for creating an attached option, which uses this routine to
	   * create the option. You can override createOption to return a custom option.
	   *
	   * @param {string} flags
	   * @param {string} [description]
	   * @return {Option} new option
	   */

	  createOption(flags, description) {
	    return new Option(flags, description);
	  }

	  /**
	   * Wrap parseArgs to catch 'commander.invalidArgument'.
	   *
	   * @param {(Option | Argument)} target
	   * @param {string} value
	   * @param {*} previous
	   * @param {string} invalidArgumentMessage
	   * @private
	   */

	  _callParseArg(target, value, previous, invalidArgumentMessage) {
	    try {
	      return target.parseArg(value, previous);
	    } catch (err) {
	      if (err.code === 'commander.invalidArgument') {
	        const message = `${invalidArgumentMessage} ${err.message}`;
	        this.error(message, { exitCode: err.exitCode, code: err.code });
	      }
	      throw err;
	    }
	  }

	  /**
	   * Check for option flag conflicts.
	   * Register option if no conflicts found, or throw on conflict.
	   *
	   * @param {Option} option
	   * @private
	   */

	  _registerOption(option) {
	    const matchingOption =
	      (option.short && this._findOption(option.short)) ||
	      (option.long && this._findOption(option.long));
	    if (matchingOption) {
	      const matchingFlag =
	        option.long && this._findOption(option.long)
	          ? option.long
	          : option.short;
	      throw new Error(`Cannot add option '${option.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${matchingFlag}'
-  already used by option '${matchingOption.flags}'`);
	    }

	    this.options.push(option);
	  }

	  /**
	   * Check for command name and alias conflicts with existing commands.
	   * Register command if no conflicts found, or throw on conflict.
	   *
	   * @param {Command} command
	   * @private
	   */

	  _registerCommand(command) {
	    const knownBy = (cmd) => {
	      return [cmd.name()].concat(cmd.aliases());
	    };

	    const alreadyUsed = knownBy(command).find((name) =>
	      this._findCommand(name),
	    );
	    if (alreadyUsed) {
	      const existingCmd = knownBy(this._findCommand(alreadyUsed)).join('|');
	      const newCmd = knownBy(command).join('|');
	      throw new Error(
	        `cannot add command '${newCmd}' as already have command '${existingCmd}'`,
	      );
	    }

	    this.commands.push(command);
	  }

	  /**
	   * Add an option.
	   *
	   * @param {Option} option
	   * @return {Command} `this` command for chaining
	   */
	  addOption(option) {
	    this._registerOption(option);

	    const oname = option.name();
	    const name = option.attributeName();

	    // store default value
	    if (option.negate) {
	      // --no-foo is special and defaults foo to true, unless a --foo option is already defined
	      const positiveLongFlag = option.long.replace(/^--no-/, '--');
	      if (!this._findOption(positiveLongFlag)) {
	        this.setOptionValueWithSource(
	          name,
	          option.defaultValue === undefined ? true : option.defaultValue,
	          'default',
	        );
	      }
	    } else if (option.defaultValue !== undefined) {
	      this.setOptionValueWithSource(name, option.defaultValue, 'default');
	    }

	    // handler for cli and env supplied values
	    const handleOptionValue = (val, invalidValueMessage, valueSource) => {
	      // val is null for optional option used without an optional-argument.
	      // val is undefined for boolean and negated option.
	      if (val == null && option.presetArg !== undefined) {
	        val = option.presetArg;
	      }

	      // custom processing
	      const oldValue = this.getOptionValue(name);
	      if (val !== null && option.parseArg) {
	        val = this._callParseArg(option, val, oldValue, invalidValueMessage);
	      } else if (val !== null && option.variadic) {
	        val = option._concatValue(val, oldValue);
	      }

	      // Fill-in appropriate missing values. Long winded but easy to follow.
	      if (val == null) {
	        if (option.negate) {
	          val = false;
	        } else if (option.isBoolean() || option.optional) {
	          val = true;
	        } else {
	          val = ''; // not normal, parseArg might have failed or be a mock function for testing
	        }
	      }
	      this.setOptionValueWithSource(name, val, valueSource);
	    };

	    this.on('option:' + oname, (val) => {
	      const invalidValueMessage = `error: option '${option.flags}' argument '${val}' is invalid.`;
	      handleOptionValue(val, invalidValueMessage, 'cli');
	    });

	    if (option.envVar) {
	      this.on('optionEnv:' + oname, (val) => {
	        const invalidValueMessage = `error: option '${option.flags}' value '${val}' from env '${option.envVar}' is invalid.`;
	        handleOptionValue(val, invalidValueMessage, 'env');
	      });
	    }

	    return this;
	  }

	  /**
	   * Internal implementation shared by .option() and .requiredOption()
	   *
	   * @return {Command} `this` command for chaining
	   * @private
	   */
	  _optionEx(config, flags, description, fn, defaultValue) {
	    if (typeof flags === 'object' && flags instanceof Option) {
	      throw new Error(
	        'To add an Option object use addOption() instead of option() or requiredOption()',
	      );
	    }
	    const option = this.createOption(flags, description);
	    option.makeOptionMandatory(!!config.mandatory);
	    if (typeof fn === 'function') {
	      option.default(defaultValue).argParser(fn);
	    } else if (fn instanceof RegExp) {
	      // deprecated
	      const regex = fn;
	      fn = (val, def) => {
	        const m = regex.exec(val);
	        return m ? m[0] : def;
	      };
	      option.default(defaultValue).argParser(fn);
	    } else {
	      option.default(fn);
	    }

	    return this.addOption(option);
	  }

	  /**
	   * Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.
	   *
	   * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
	   * option-argument is indicated by `<>` and an optional option-argument by `[]`.
	   *
	   * See the README for more details, and see also addOption() and requiredOption().
	   *
	   * @example
	   * program
	   *     .option('-p, --pepper', 'add pepper')
	   *     .option('-p, --pizza-type <TYPE>', 'type of pizza') // required option-argument
	   *     .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
	   *     .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) // custom parse function
	   *
	   * @param {string} flags
	   * @param {string} [description]
	   * @param {(Function|*)} [parseArg] - custom option processing function or default value
	   * @param {*} [defaultValue]
	   * @return {Command} `this` command for chaining
	   */

	  option(flags, description, parseArg, defaultValue) {
	    return this._optionEx({}, flags, description, parseArg, defaultValue);
	  }

	  /**
	   * Add a required option which must have a value after parsing. This usually means
	   * the option must be specified on the command line. (Otherwise the same as .option().)
	   *
	   * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
	   *
	   * @param {string} flags
	   * @param {string} [description]
	   * @param {(Function|*)} [parseArg] - custom option processing function or default value
	   * @param {*} [defaultValue]
	   * @return {Command} `this` command for chaining
	   */

	  requiredOption(flags, description, parseArg, defaultValue) {
	    return this._optionEx(
	      { mandatory: true },
	      flags,
	      description,
	      parseArg,
	      defaultValue,
	    );
	  }

	  /**
	   * Alter parsing of short flags with optional values.
	   *
	   * @example
	   * // for `.option('-f,--flag [value]'):
	   * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
	   * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
	   *
	   * @param {boolean} [combine] - if `true` or omitted, an optional value can be specified directly after the flag.
	   * @return {Command} `this` command for chaining
	   */
	  combineFlagAndOptionalValue(combine = true) {
	    this._combineFlagAndOptionalValue = !!combine;
	    return this;
	  }

	  /**
	   * Allow unknown options on the command line.
	   *
	   * @param {boolean} [allowUnknown] - if `true` or omitted, no error will be thrown for unknown options.
	   * @return {Command} `this` command for chaining
	   */
	  allowUnknownOption(allowUnknown = true) {
	    this._allowUnknownOption = !!allowUnknown;
	    return this;
	  }

	  /**
	   * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
	   *
	   * @param {boolean} [allowExcess] - if `true` or omitted, no error will be thrown for excess arguments.
	   * @return {Command} `this` command for chaining
	   */
	  allowExcessArguments(allowExcess = true) {
	    this._allowExcessArguments = !!allowExcess;
	    return this;
	  }

	  /**
	   * Enable positional options. Positional means global options are specified before subcommands which lets
	   * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
	   * The default behaviour is non-positional and global options may appear anywhere on the command line.
	   *
	   * @param {boolean} [positional]
	   * @return {Command} `this` command for chaining
	   */
	  enablePositionalOptions(positional = true) {
	    this._enablePositionalOptions = !!positional;
	    return this;
	  }

	  /**
	   * Pass through options that come after command-arguments rather than treat them as command-options,
	   * so actual command-options come before command-arguments. Turning this on for a subcommand requires
	   * positional options to have been enabled on the program (parent commands).
	   * The default behaviour is non-positional and options may appear before or after command-arguments.
	   *
	   * @param {boolean} [passThrough] for unknown options.
	   * @return {Command} `this` command for chaining
	   */
	  passThroughOptions(passThrough = true) {
	    this._passThroughOptions = !!passThrough;
	    this._checkForBrokenPassThrough();
	    return this;
	  }

	  /**
	   * @private
	   */

	  _checkForBrokenPassThrough() {
	    if (
	      this.parent &&
	      this._passThroughOptions &&
	      !this.parent._enablePositionalOptions
	    ) {
	      throw new Error(
	        `passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`,
	      );
	    }
	  }

	  /**
	   * Whether to store option values as properties on command object,
	   * or store separately (specify false). In both cases the option values can be accessed using .opts().
	   *
	   * @param {boolean} [storeAsProperties=true]
	   * @return {Command} `this` command for chaining
	   */

	  storeOptionsAsProperties(storeAsProperties = true) {
	    if (this.options.length) {
	      throw new Error('call .storeOptionsAsProperties() before adding options');
	    }
	    if (Object.keys(this._optionValues).length) {
	      throw new Error(
	        'call .storeOptionsAsProperties() before setting option values',
	      );
	    }
	    this._storeOptionsAsProperties = !!storeAsProperties;
	    return this;
	  }

	  /**
	   * Retrieve option value.
	   *
	   * @param {string} key
	   * @return {object} value
	   */

	  getOptionValue(key) {
	    if (this._storeOptionsAsProperties) {
	      return this[key];
	    }
	    return this._optionValues[key];
	  }

	  /**
	   * Store option value.
	   *
	   * @param {string} key
	   * @param {object} value
	   * @return {Command} `this` command for chaining
	   */

	  setOptionValue(key, value) {
	    return this.setOptionValueWithSource(key, value, undefined);
	  }

	  /**
	   * Store option value and where the value came from.
	   *
	   * @param {string} key
	   * @param {object} value
	   * @param {string} source - expected values are default/config/env/cli/implied
	   * @return {Command} `this` command for chaining
	   */

	  setOptionValueWithSource(key, value, source) {
	    if (this._storeOptionsAsProperties) {
	      this[key] = value;
	    } else {
	      this._optionValues[key] = value;
	    }
	    this._optionValueSources[key] = source;
	    return this;
	  }

	  /**
	   * Get source of option value.
	   * Expected values are default | config | env | cli | implied
	   *
	   * @param {string} key
	   * @return {string}
	   */

	  getOptionValueSource(key) {
	    return this._optionValueSources[key];
	  }

	  /**
	   * Get source of option value. See also .optsWithGlobals().
	   * Expected values are default | config | env | cli | implied
	   *
	   * @param {string} key
	   * @return {string}
	   */

	  getOptionValueSourceWithGlobals(key) {
	    // global overwrites local, like optsWithGlobals
	    let source;
	    this._getCommandAndAncestors().forEach((cmd) => {
	      if (cmd.getOptionValueSource(key) !== undefined) {
	        source = cmd.getOptionValueSource(key);
	      }
	    });
	    return source;
	  }

	  /**
	   * Get user arguments from implied or explicit arguments.
	   * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
	   *
	   * @private
	   */

	  _prepareUserArgs(argv, parseOptions) {
	    if (argv !== undefined && !Array.isArray(argv)) {
	      throw new Error('first parameter to parse must be array or undefined');
	    }
	    parseOptions = parseOptions || {};

	    // auto-detect argument conventions if nothing supplied
	    if (argv === undefined && parseOptions.from === undefined) {
	      if (process.versions?.electron) {
	        parseOptions.from = 'electron';
	      }
	      // check node specific options for scenarios where user CLI args follow executable without scriptname
	      const execArgv = process.execArgv ?? [];
	      if (
	        execArgv.includes('-e') ||
	        execArgv.includes('--eval') ||
	        execArgv.includes('-p') ||
	        execArgv.includes('--print')
	      ) {
	        parseOptions.from = 'eval'; // internal usage, not documented
	      }
	    }

	    // default to using process.argv
	    if (argv === undefined) {
	      argv = process.argv;
	    }
	    this.rawArgs = argv.slice();

	    // extract the user args and scriptPath
	    let userArgs;
	    switch (parseOptions.from) {
	      case undefined:
	      case 'node':
	        this._scriptPath = argv[1];
	        userArgs = argv.slice(2);
	        break;
	      case 'electron':
	        // @ts-ignore: because defaultApp is an unknown property
	        if (process.defaultApp) {
	          this._scriptPath = argv[1];
	          userArgs = argv.slice(2);
	        } else {
	          userArgs = argv.slice(1);
	        }
	        break;
	      case 'user':
	        userArgs = argv.slice(0);
	        break;
	      case 'eval':
	        userArgs = argv.slice(1);
	        break;
	      default:
	        throw new Error(
	          `unexpected parse option { from: '${parseOptions.from}' }`,
	        );
	    }

	    // Find default name for program from arguments.
	    if (!this._name && this._scriptPath)
	      this.nameFromFilename(this._scriptPath);
	    this._name = this._name || 'program';

	    return userArgs;
	  }

	  /**
	   * Parse `argv`, setting options and invoking commands when defined.
	   *
	   * Use parseAsync instead of parse if any of your action handlers are async.
	   *
	   * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
	   *
	   * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
	   * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
	   * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
	   * - `'user'`: just user arguments
	   *
	   * @example
	   * program.parse(); // parse process.argv and auto-detect electron and special node flags
	   * program.parse(process.argv); // assume argv[0] is app and argv[1] is script
	   * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
	   *
	   * @param {string[]} [argv] - optional, defaults to process.argv
	   * @param {object} [parseOptions] - optionally specify style of options with from: node/user/electron
	   * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
	   * @return {Command} `this` command for chaining
	   */

	  parse(argv, parseOptions) {
	    const userArgs = this._prepareUserArgs(argv, parseOptions);
	    this._parseCommand([], userArgs);

	    return this;
	  }

	  /**
	   * Parse `argv`, setting options and invoking commands when defined.
	   *
	   * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
	   *
	   * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
	   * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
	   * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
	   * - `'user'`: just user arguments
	   *
	   * @example
	   * await program.parseAsync(); // parse process.argv and auto-detect electron and special node flags
	   * await program.parseAsync(process.argv); // assume argv[0] is app and argv[1] is script
	   * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
	   *
	   * @param {string[]} [argv]
	   * @param {object} [parseOptions]
	   * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
	   * @return {Promise}
	   */

	  async parseAsync(argv, parseOptions) {
	    const userArgs = this._prepareUserArgs(argv, parseOptions);
	    await this._parseCommand([], userArgs);

	    return this;
	  }

	  /**
	   * Execute a sub-command executable.
	   *
	   * @private
	   */

	  _executeSubCommand(subcommand, args) {
	    args = args.slice();
	    let launchWithNode = false; // Use node for source targets so do not need to get permissions correct, and on Windows.
	    const sourceExt = ['.js', '.ts', '.tsx', '.mjs', '.cjs'];

	    function findFile(baseDir, baseName) {
	      // Look for specified file
	      const localBin = path.resolve(baseDir, baseName);
	      if (fs.existsSync(localBin)) return localBin;

	      // Stop looking if candidate already has an expected extension.
	      if (sourceExt.includes(path.extname(baseName))) return undefined;

	      // Try all the extensions.
	      const foundExt = sourceExt.find((ext) =>
	        fs.existsSync(`${localBin}${ext}`),
	      );
	      if (foundExt) return `${localBin}${foundExt}`;

	      return undefined;
	    }

	    // Not checking for help first. Unlikely to have mandatory and executable, and can't robustly test for help flags in external command.
	    this._checkForMissingMandatoryOptions();
	    this._checkForConflictingOptions();

	    // executableFile and executableDir might be full path, or just a name
	    let executableFile =
	      subcommand._executableFile || `${this._name}-${subcommand._name}`;
	    let executableDir = this._executableDir || '';
	    if (this._scriptPath) {
	      let resolvedScriptPath; // resolve possible symlink for installed npm binary
	      try {
	        resolvedScriptPath = fs.realpathSync(this._scriptPath);
	      } catch (err) {
	        resolvedScriptPath = this._scriptPath;
	      }
	      executableDir = path.resolve(
	        path.dirname(resolvedScriptPath),
	        executableDir,
	      );
	    }

	    // Look for a local file in preference to a command in PATH.
	    if (executableDir) {
	      let localFile = findFile(executableDir, executableFile);

	      // Legacy search using prefix of script name instead of command name
	      if (!localFile && !subcommand._executableFile && this._scriptPath) {
	        const legacyName = path.basename(
	          this._scriptPath,
	          path.extname(this._scriptPath),
	        );
	        if (legacyName !== this._name) {
	          localFile = findFile(
	            executableDir,
	            `${legacyName}-${subcommand._name}`,
	          );
	        }
	      }
	      executableFile = localFile || executableFile;
	    }

	    launchWithNode = sourceExt.includes(path.extname(executableFile));

	    let proc;
	    if (process.platform !== 'win32') {
	      if (launchWithNode) {
	        args.unshift(executableFile);
	        // add executable arguments to spawn
	        args = incrementNodeInspectorPort(process.execArgv).concat(args);

	        proc = childProcess.spawn(process.argv[0], args, { stdio: 'inherit' });
	      } else {
	        proc = childProcess.spawn(executableFile, args, { stdio: 'inherit' });
	      }
	    } else {
	      args.unshift(executableFile);
	      // add executable arguments to spawn
	      args = incrementNodeInspectorPort(process.execArgv).concat(args);
	      proc = childProcess.spawn(process.execPath, args, { stdio: 'inherit' });
	    }

	    if (!proc.killed) {
	      // testing mainly to avoid leak warnings during unit tests with mocked spawn
	      const signals = ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP'];
	      signals.forEach((signal) => {
	        process.on(signal, () => {
	          if (proc.killed === false && proc.exitCode === null) {
	            // @ts-ignore because signals not typed to known strings
	            proc.kill(signal);
	          }
	        });
	      });
	    }

	    // By default terminate process when spawned process terminates.
	    const exitCallback = this._exitCallback;
	    proc.on('close', (code) => {
	      code = code ?? 1; // code is null if spawned process terminated due to a signal
	      if (!exitCallback) {
	        process.exit(code);
	      } else {
	        exitCallback(
	          new CommanderError(
	            code,
	            'commander.executeSubCommandAsync',
	            '(close)',
	          ),
	        );
	      }
	    });
	    proc.on('error', (err) => {
	      // @ts-ignore: because err.code is an unknown property
	      if (err.code === 'ENOENT') {
	        const executableDirMessage = executableDir
	          ? `searched for local subcommand relative to directory '${executableDir}'`
	          : 'no directory for search for local subcommand, use .executableDir() to supply a custom directory';
	        const executableMissing = `'${executableFile}' does not exist
 - if '${subcommand._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
	        throw new Error(executableMissing);
	        // @ts-ignore: because err.code is an unknown property
	      } else if (err.code === 'EACCES') {
	        throw new Error(`'${executableFile}' not executable`);
	      }
	      if (!exitCallback) {
	        process.exit(1);
	      } else {
	        const wrappedError = new CommanderError(
	          1,
	          'commander.executeSubCommandAsync',
	          '(error)',
	        );
	        wrappedError.nestedError = err;
	        exitCallback(wrappedError);
	      }
	    });

	    // Store the reference to the child process
	    this.runningCommand = proc;
	  }

	  /**
	   * @private
	   */

	  _dispatchSubcommand(commandName, operands, unknown) {
	    const subCommand = this._findCommand(commandName);
	    if (!subCommand) this.help({ error: true });

	    let promiseChain;
	    promiseChain = this._chainOrCallSubCommandHook(
	      promiseChain,
	      subCommand,
	      'preSubcommand',
	    );
	    promiseChain = this._chainOrCall(promiseChain, () => {
	      if (subCommand._executableHandler) {
	        this._executeSubCommand(subCommand, operands.concat(unknown));
	      } else {
	        return subCommand._parseCommand(operands, unknown);
	      }
	    });
	    return promiseChain;
	  }

	  /**
	   * Invoke help directly if possible, or dispatch if necessary.
	   * e.g. help foo
	   *
	   * @private
	   */

	  _dispatchHelpCommand(subcommandName) {
	    if (!subcommandName) {
	      this.help();
	    }
	    const subCommand = this._findCommand(subcommandName);
	    if (subCommand && !subCommand._executableHandler) {
	      subCommand.help();
	    }

	    // Fallback to parsing the help flag to invoke the help.
	    return this._dispatchSubcommand(
	      subcommandName,
	      [],
	      [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? '--help'],
	    );
	  }

	  /**
	   * Check this.args against expected this.registeredArguments.
	   *
	   * @private
	   */

	  _checkNumberOfArguments() {
	    // too few
	    this.registeredArguments.forEach((arg, i) => {
	      if (arg.required && this.args[i] == null) {
	        this.missingArgument(arg.name());
	      }
	    });
	    // too many
	    if (
	      this.registeredArguments.length > 0 &&
	      this.registeredArguments[this.registeredArguments.length - 1].variadic
	    ) {
	      return;
	    }
	    if (this.args.length > this.registeredArguments.length) {
	      this._excessArguments(this.args);
	    }
	  }

	  /**
	   * Process this.args using this.registeredArguments and save as this.processedArgs!
	   *
	   * @private
	   */

	  _processArguments() {
	    const myParseArg = (argument, value, previous) => {
	      // Extra processing for nice error message on parsing failure.
	      let parsedValue = value;
	      if (value !== null && argument.parseArg) {
	        const invalidValueMessage = `error: command-argument value '${value}' is invalid for argument '${argument.name()}'.`;
	        parsedValue = this._callParseArg(
	          argument,
	          value,
	          previous,
	          invalidValueMessage,
	        );
	      }
	      return parsedValue;
	    };

	    this._checkNumberOfArguments();

	    const processedArgs = [];
	    this.registeredArguments.forEach((declaredArg, index) => {
	      let value = declaredArg.defaultValue;
	      if (declaredArg.variadic) {
	        // Collect together remaining arguments for passing together as an array.
	        if (index < this.args.length) {
	          value = this.args.slice(index);
	          if (declaredArg.parseArg) {
	            value = value.reduce((processed, v) => {
	              return myParseArg(declaredArg, v, processed);
	            }, declaredArg.defaultValue);
	          }
	        } else if (value === undefined) {
	          value = [];
	        }
	      } else if (index < this.args.length) {
	        value = this.args[index];
	        if (declaredArg.parseArg) {
	          value = myParseArg(declaredArg, value, declaredArg.defaultValue);
	        }
	      }
	      processedArgs[index] = value;
	    });
	    this.processedArgs = processedArgs;
	  }

	  /**
	   * Once we have a promise we chain, but call synchronously until then.
	   *
	   * @param {(Promise|undefined)} promise
	   * @param {Function} fn
	   * @return {(Promise|undefined)}
	   * @private
	   */

	  _chainOrCall(promise, fn) {
	    // thenable
	    if (promise && promise.then && typeof promise.then === 'function') {
	      // already have a promise, chain callback
	      return promise.then(() => fn());
	    }
	    // callback might return a promise
	    return fn();
	  }

	  /**
	   *
	   * @param {(Promise|undefined)} promise
	   * @param {string} event
	   * @return {(Promise|undefined)}
	   * @private
	   */

	  _chainOrCallHooks(promise, event) {
	    let result = promise;
	    const hooks = [];
	    this._getCommandAndAncestors()
	      .reverse()
	      .filter((cmd) => cmd._lifeCycleHooks[event] !== undefined)
	      .forEach((hookedCommand) => {
	        hookedCommand._lifeCycleHooks[event].forEach((callback) => {
	          hooks.push({ hookedCommand, callback });
	        });
	      });
	    if (event === 'postAction') {
	      hooks.reverse();
	    }

	    hooks.forEach((hookDetail) => {
	      result = this._chainOrCall(result, () => {
	        return hookDetail.callback(hookDetail.hookedCommand, this);
	      });
	    });
	    return result;
	  }

	  /**
	   *
	   * @param {(Promise|undefined)} promise
	   * @param {Command} subCommand
	   * @param {string} event
	   * @return {(Promise|undefined)}
	   * @private
	   */

	  _chainOrCallSubCommandHook(promise, subCommand, event) {
	    let result = promise;
	    if (this._lifeCycleHooks[event] !== undefined) {
	      this._lifeCycleHooks[event].forEach((hook) => {
	        result = this._chainOrCall(result, () => {
	          return hook(this, subCommand);
	        });
	      });
	    }
	    return result;
	  }

	  /**
	   * Process arguments in context of this command.
	   * Returns action result, in case it is a promise.
	   *
	   * @private
	   */

	  _parseCommand(operands, unknown) {
	    const parsed = this.parseOptions(unknown);
	    this._parseOptionsEnv(); // after cli, so parseArg not called on both cli and env
	    this._parseOptionsImplied();
	    operands = operands.concat(parsed.operands);
	    unknown = parsed.unknown;
	    this.args = operands.concat(unknown);

	    if (operands && this._findCommand(operands[0])) {
	      return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
	    }
	    if (
	      this._getHelpCommand() &&
	      operands[0] === this._getHelpCommand().name()
	    ) {
	      return this._dispatchHelpCommand(operands[1]);
	    }
	    if (this._defaultCommandName) {
	      this._outputHelpIfRequested(unknown); // Run the help for default command from parent rather than passing to default command
	      return this._dispatchSubcommand(
	        this._defaultCommandName,
	        operands,
	        unknown,
	      );
	    }
	    if (
	      this.commands.length &&
	      this.args.length === 0 &&
	      !this._actionHandler &&
	      !this._defaultCommandName
	    ) {
	      // probably missing subcommand and no handler, user needs help (and exit)
	      this.help({ error: true });
	    }

	    this._outputHelpIfRequested(parsed.unknown);
	    this._checkForMissingMandatoryOptions();
	    this._checkForConflictingOptions();

	    // We do not always call this check to avoid masking a "better" error, like unknown command.
	    const checkForUnknownOptions = () => {
	      if (parsed.unknown.length > 0) {
	        this.unknownOption(parsed.unknown[0]);
	      }
	    };

	    const commandEvent = `command:${this.name()}`;
	    if (this._actionHandler) {
	      checkForUnknownOptions();
	      this._processArguments();

	      let promiseChain;
	      promiseChain = this._chainOrCallHooks(promiseChain, 'preAction');
	      promiseChain = this._chainOrCall(promiseChain, () =>
	        this._actionHandler(this.processedArgs),
	      );
	      if (this.parent) {
	        promiseChain = this._chainOrCall(promiseChain, () => {
	          this.parent.emit(commandEvent, operands, unknown); // legacy
	        });
	      }
	      promiseChain = this._chainOrCallHooks(promiseChain, 'postAction');
	      return promiseChain;
	    }
	    if (this.parent && this.parent.listenerCount(commandEvent)) {
	      checkForUnknownOptions();
	      this._processArguments();
	      this.parent.emit(commandEvent, operands, unknown); // legacy
	    } else if (operands.length) {
	      if (this._findCommand('*')) {
	        // legacy default command
	        return this._dispatchSubcommand('*', operands, unknown);
	      }
	      if (this.listenerCount('command:*')) {
	        // skip option check, emit event for possible misspelling suggestion
	        this.emit('command:*', operands, unknown);
	      } else if (this.commands.length) {
	        this.unknownCommand();
	      } else {
	        checkForUnknownOptions();
	        this._processArguments();
	      }
	    } else if (this.commands.length) {
	      checkForUnknownOptions();
	      // This command has subcommands and nothing hooked up at this level, so display help (and exit).
	      this.help({ error: true });
	    } else {
	      checkForUnknownOptions();
	      this._processArguments();
	      // fall through for caller to handle after calling .parse()
	    }
	  }

	  /**
	   * Find matching command.
	   *
	   * @private
	   * @return {Command | undefined}
	   */
	  _findCommand(name) {
	    if (!name) return undefined;
	    return this.commands.find(
	      (cmd) => cmd._name === name || cmd._aliases.includes(name),
	    );
	  }

	  /**
	   * Return an option matching `arg` if any.
	   *
	   * @param {string} arg
	   * @return {Option}
	   * @package
	   */

	  _findOption(arg) {
	    return this.options.find((option) => option.is(arg));
	  }

	  /**
	   * Display an error message if a mandatory option does not have a value.
	   * Called after checking for help flags in leaf subcommand.
	   *
	   * @private
	   */

	  _checkForMissingMandatoryOptions() {
	    // Walk up hierarchy so can call in subcommand after checking for displaying help.
	    this._getCommandAndAncestors().forEach((cmd) => {
	      cmd.options.forEach((anOption) => {
	        if (
	          anOption.mandatory &&
	          cmd.getOptionValue(anOption.attributeName()) === undefined
	        ) {
	          cmd.missingMandatoryOptionValue(anOption);
	        }
	      });
	    });
	  }

	  /**
	   * Display an error message if conflicting options are used together in this.
	   *
	   * @private
	   */
	  _checkForConflictingLocalOptions() {
	    const definedNonDefaultOptions = this.options.filter((option) => {
	      const optionKey = option.attributeName();
	      if (this.getOptionValue(optionKey) === undefined) {
	        return false;
	      }
	      return this.getOptionValueSource(optionKey) !== 'default';
	    });

	    const optionsWithConflicting = definedNonDefaultOptions.filter(
	      (option) => option.conflictsWith.length > 0,
	    );

	    optionsWithConflicting.forEach((option) => {
	      const conflictingAndDefined = definedNonDefaultOptions.find((defined) =>
	        option.conflictsWith.includes(defined.attributeName()),
	      );
	      if (conflictingAndDefined) {
	        this._conflictingOption(option, conflictingAndDefined);
	      }
	    });
	  }

	  /**
	   * Display an error message if conflicting options are used together.
	   * Called after checking for help flags in leaf subcommand.
	   *
	   * @private
	   */
	  _checkForConflictingOptions() {
	    // Walk up hierarchy so can call in subcommand after checking for displaying help.
	    this._getCommandAndAncestors().forEach((cmd) => {
	      cmd._checkForConflictingLocalOptions();
	    });
	  }

	  /**
	   * Parse options from `argv` removing known options,
	   * and return argv split into operands and unknown arguments.
	   *
	   * Examples:
	   *
	   *     argv => operands, unknown
	   *     --known kkk op => [op], []
	   *     op --known kkk => [op], []
	   *     sub --unknown uuu op => [sub], [--unknown uuu op]
	   *     sub -- --unknown uuu op => [sub --unknown uuu op], []
	   *
	   * @param {string[]} argv
	   * @return {{operands: string[], unknown: string[]}}
	   */

	  parseOptions(argv) {
	    const operands = []; // operands, not options or values
	    const unknown = []; // first unknown option and remaining unknown args
	    let dest = operands;
	    const args = argv.slice();

	    function maybeOption(arg) {
	      return arg.length > 1 && arg[0] === '-';
	    }

	    // parse options
	    let activeVariadicOption = null;
	    while (args.length) {
	      const arg = args.shift();

	      // literal
	      if (arg === '--') {
	        if (dest === unknown) dest.push(arg);
	        dest.push(...args);
	        break;
	      }

	      if (activeVariadicOption && !maybeOption(arg)) {
	        this.emit(`option:${activeVariadicOption.name()}`, arg);
	        continue;
	      }
	      activeVariadicOption = null;

	      if (maybeOption(arg)) {
	        const option = this._findOption(arg);
	        // recognised option, call listener to assign value with possible custom processing
	        if (option) {
	          if (option.required) {
	            const value = args.shift();
	            if (value === undefined) this.optionMissingArgument(option);
	            this.emit(`option:${option.name()}`, value);
	          } else if (option.optional) {
	            let value = null;
	            // historical behaviour is optional value is following arg unless an option
	            if (args.length > 0 && !maybeOption(args[0])) {
	              value = args.shift();
	            }
	            this.emit(`option:${option.name()}`, value);
	          } else {
	            // boolean flag
	            this.emit(`option:${option.name()}`);
	          }
	          activeVariadicOption = option.variadic ? option : null;
	          continue;
	        }
	      }

	      // Look for combo options following single dash, eat first one if known.
	      if (arg.length > 2 && arg[0] === '-' && arg[1] !== '-') {
	        const option = this._findOption(`-${arg[1]}`);
	        if (option) {
	          if (
	            option.required ||
	            (option.optional && this._combineFlagAndOptionalValue)
	          ) {
	            // option with value following in same argument
	            this.emit(`option:${option.name()}`, arg.slice(2));
	          } else {
	            // boolean option, emit and put back remainder of arg for further processing
	            this.emit(`option:${option.name()}`);
	            args.unshift(`-${arg.slice(2)}`);
	          }
	          continue;
	        }
	      }

	      // Look for known long flag with value, like --foo=bar
	      if (/^--[^=]+=/.test(arg)) {
	        const index = arg.indexOf('=');
	        const option = this._findOption(arg.slice(0, index));
	        if (option && (option.required || option.optional)) {
	          this.emit(`option:${option.name()}`, arg.slice(index + 1));
	          continue;
	        }
	      }

	      // Not a recognised option by this command.
	      // Might be a command-argument, or subcommand option, or unknown option, or help command or option.

	      // An unknown option means further arguments also classified as unknown so can be reprocessed by subcommands.
	      if (maybeOption(arg)) {
	        dest = unknown;
	      }

	      // If using positionalOptions, stop processing our options at subcommand.
	      if (
	        (this._enablePositionalOptions || this._passThroughOptions) &&
	        operands.length === 0 &&
	        unknown.length === 0
	      ) {
	        if (this._findCommand(arg)) {
	          operands.push(arg);
	          if (args.length > 0) unknown.push(...args);
	          break;
	        } else if (
	          this._getHelpCommand() &&
	          arg === this._getHelpCommand().name()
	        ) {
	          operands.push(arg);
	          if (args.length > 0) operands.push(...args);
	          break;
	        } else if (this._defaultCommandName) {
	          unknown.push(arg);
	          if (args.length > 0) unknown.push(...args);
	          break;
	        }
	      }

	      // If using passThroughOptions, stop processing options at first command-argument.
	      if (this._passThroughOptions) {
	        dest.push(arg);
	        if (args.length > 0) dest.push(...args);
	        break;
	      }

	      // add arg
	      dest.push(arg);
	    }

	    return { operands, unknown };
	  }

	  /**
	   * Return an object containing local option values as key-value pairs.
	   *
	   * @return {object}
	   */
	  opts() {
	    if (this._storeOptionsAsProperties) {
	      // Preserve original behaviour so backwards compatible when still using properties
	      const result = {};
	      const len = this.options.length;

	      for (let i = 0; i < len; i++) {
	        const key = this.options[i].attributeName();
	        result[key] =
	          key === this._versionOptionName ? this._version : this[key];
	      }
	      return result;
	    }

	    return this._optionValues;
	  }

	  /**
	   * Return an object containing merged local and global option values as key-value pairs.
	   *
	   * @return {object}
	   */
	  optsWithGlobals() {
	    // globals overwrite locals
	    return this._getCommandAndAncestors().reduce(
	      (combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()),
	      {},
	    );
	  }

	  /**
	   * Display error message and exit (or call exitOverride).
	   *
	   * @param {string} message
	   * @param {object} [errorOptions]
	   * @param {string} [errorOptions.code] - an id string representing the error
	   * @param {number} [errorOptions.exitCode] - used with process.exit
	   */
	  error(message, errorOptions) {
	    // output handling
	    this._outputConfiguration.outputError(
	      `${message}\n`,
	      this._outputConfiguration.writeErr,
	    );
	    if (typeof this._showHelpAfterError === 'string') {
	      this._outputConfiguration.writeErr(`${this._showHelpAfterError}\n`);
	    } else if (this._showHelpAfterError) {
	      this._outputConfiguration.writeErr('\n');
	      this.outputHelp({ error: true });
	    }

	    // exit handling
	    const config = errorOptions || {};
	    const exitCode = config.exitCode || 1;
	    const code = config.code || 'commander.error';
	    this._exit(exitCode, code, message);
	  }

	  /**
	   * Apply any option related environment variables, if option does
	   * not have a value from cli or client code.
	   *
	   * @private
	   */
	  _parseOptionsEnv() {
	    this.options.forEach((option) => {
	      if (option.envVar && option.envVar in process.env) {
	        const optionKey = option.attributeName();
	        // Priority check. Do not overwrite cli or options from unknown source (client-code).
	        if (
	          this.getOptionValue(optionKey) === undefined ||
	          ['default', 'config', 'env'].includes(
	            this.getOptionValueSource(optionKey),
	          )
	        ) {
	          if (option.required || option.optional) {
	            // option can take a value
	            // keep very simple, optional always takes value
	            this.emit(`optionEnv:${option.name()}`, process.env[option.envVar]);
	          } else {
	            // boolean
	            // keep very simple, only care that envVar defined and not the value
	            this.emit(`optionEnv:${option.name()}`);
	          }
	        }
	      }
	    });
	  }

	  /**
	   * Apply any implied option values, if option is undefined or default value.
	   *
	   * @private
	   */
	  _parseOptionsImplied() {
	    const dualHelper = new DualOptions(this.options);
	    const hasCustomOptionValue = (optionKey) => {
	      return (
	        this.getOptionValue(optionKey) !== undefined &&
	        !['default', 'implied'].includes(this.getOptionValueSource(optionKey))
	      );
	    };
	    this.options
	      .filter(
	        (option) =>
	          option.implied !== undefined &&
	          hasCustomOptionValue(option.attributeName()) &&
	          dualHelper.valueFromOption(
	            this.getOptionValue(option.attributeName()),
	            option,
	          ),
	      )
	      .forEach((option) => {
	        Object.keys(option.implied)
	          .filter((impliedKey) => !hasCustomOptionValue(impliedKey))
	          .forEach((impliedKey) => {
	            this.setOptionValueWithSource(
	              impliedKey,
	              option.implied[impliedKey],
	              'implied',
	            );
	          });
	      });
	  }

	  /**
	   * Argument `name` is missing.
	   *
	   * @param {string} name
	   * @private
	   */

	  missingArgument(name) {
	    const message = `error: missing required argument '${name}'`;
	    this.error(message, { code: 'commander.missingArgument' });
	  }

	  /**
	   * `Option` is missing an argument.
	   *
	   * @param {Option} option
	   * @private
	   */

	  optionMissingArgument(option) {
	    const message = `error: option '${option.flags}' argument missing`;
	    this.error(message, { code: 'commander.optionMissingArgument' });
	  }

	  /**
	   * `Option` does not have a value, and is a mandatory option.
	   *
	   * @param {Option} option
	   * @private
	   */

	  missingMandatoryOptionValue(option) {
	    const message = `error: required option '${option.flags}' not specified`;
	    this.error(message, { code: 'commander.missingMandatoryOptionValue' });
	  }

	  /**
	   * `Option` conflicts with another option.
	   *
	   * @param {Option} option
	   * @param {Option} conflictingOption
	   * @private
	   */
	  _conflictingOption(option, conflictingOption) {
	    // The calling code does not know whether a negated option is the source of the
	    // value, so do some work to take an educated guess.
	    const findBestOptionFromValue = (option) => {
	      const optionKey = option.attributeName();
	      const optionValue = this.getOptionValue(optionKey);
	      const negativeOption = this.options.find(
	        (target) => target.negate && optionKey === target.attributeName(),
	      );
	      const positiveOption = this.options.find(
	        (target) => !target.negate && optionKey === target.attributeName(),
	      );
	      if (
	        negativeOption &&
	        ((negativeOption.presetArg === undefined && optionValue === false) ||
	          (negativeOption.presetArg !== undefined &&
	            optionValue === negativeOption.presetArg))
	      ) {
	        return negativeOption;
	      }
	      return positiveOption || option;
	    };

	    const getErrorMessage = (option) => {
	      const bestOption = findBestOptionFromValue(option);
	      const optionKey = bestOption.attributeName();
	      const source = this.getOptionValueSource(optionKey);
	      if (source === 'env') {
	        return `environment variable '${bestOption.envVar}'`;
	      }
	      return `option '${bestOption.flags}'`;
	    };

	    const message = `error: ${getErrorMessage(option)} cannot be used with ${getErrorMessage(conflictingOption)}`;
	    this.error(message, { code: 'commander.conflictingOption' });
	  }

	  /**
	   * Unknown option `flag`.
	   *
	   * @param {string} flag
	   * @private
	   */

	  unknownOption(flag) {
	    if (this._allowUnknownOption) return;
	    let suggestion = '';

	    if (flag.startsWith('--') && this._showSuggestionAfterError) {
	      // Looping to pick up the global options too
	      let candidateFlags = [];
	      // eslint-disable-next-line @typescript-eslint/no-this-alias
	      let command = this;
	      do {
	        const moreFlags = command
	          .createHelp()
	          .visibleOptions(command)
	          .filter((option) => option.long)
	          .map((option) => option.long);
	        candidateFlags = candidateFlags.concat(moreFlags);
	        command = command.parent;
	      } while (command && !command._enablePositionalOptions);
	      suggestion = suggestSimilar(flag, candidateFlags);
	    }

	    const message = `error: unknown option '${flag}'${suggestion}`;
	    this.error(message, { code: 'commander.unknownOption' });
	  }

	  /**
	   * Excess arguments, more than expected.
	   *
	   * @param {string[]} receivedArgs
	   * @private
	   */

	  _excessArguments(receivedArgs) {
	    if (this._allowExcessArguments) return;

	    const expected = this.registeredArguments.length;
	    const s = expected === 1 ? '' : 's';
	    const forSubcommand = this.parent ? ` for '${this.name()}'` : '';
	    const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
	    this.error(message, { code: 'commander.excessArguments' });
	  }

	  /**
	   * Unknown command.
	   *
	   * @private
	   */

	  unknownCommand() {
	    const unknownName = this.args[0];
	    let suggestion = '';

	    if (this._showSuggestionAfterError) {
	      const candidateNames = [];
	      this.createHelp()
	        .visibleCommands(this)
	        .forEach((command) => {
	          candidateNames.push(command.name());
	          // just visible alias
	          if (command.alias()) candidateNames.push(command.alias());
	        });
	      suggestion = suggestSimilar(unknownName, candidateNames);
	    }

	    const message = `error: unknown command '${unknownName}'${suggestion}`;
	    this.error(message, { code: 'commander.unknownCommand' });
	  }

	  /**
	   * Get or set the program version.
	   *
	   * This method auto-registers the "-V, --version" option which will print the version number.
	   *
	   * You can optionally supply the flags and description to override the defaults.
	   *
	   * @param {string} [str]
	   * @param {string} [flags]
	   * @param {string} [description]
	   * @return {(this | string | undefined)} `this` command for chaining, or version string if no arguments
	   */

	  version(str, flags, description) {
	    if (str === undefined) return this._version;
	    this._version = str;
	    flags = flags || '-V, --version';
	    description = description || 'output the version number';
	    const versionOption = this.createOption(flags, description);
	    this._versionOptionName = versionOption.attributeName();
	    this._registerOption(versionOption);

	    this.on('option:' + versionOption.name(), () => {
	      this._outputConfiguration.writeOut(`${str}\n`);
	      this._exit(0, 'commander.version', str);
	    });
	    return this;
	  }

	  /**
	   * Set the description.
	   *
	   * @param {string} [str]
	   * @param {object} [argsDescription]
	   * @return {(string|Command)}
	   */
	  description(str, argsDescription) {
	    if (str === undefined && argsDescription === undefined)
	      return this._description;
	    this._description = str;
	    if (argsDescription) {
	      this._argsDescription = argsDescription;
	    }
	    return this;
	  }

	  /**
	   * Set the summary. Used when listed as subcommand of parent.
	   *
	   * @param {string} [str]
	   * @return {(string|Command)}
	   */
	  summary(str) {
	    if (str === undefined) return this._summary;
	    this._summary = str;
	    return this;
	  }

	  /**
	   * Set an alias for the command.
	   *
	   * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
	   *
	   * @param {string} [alias]
	   * @return {(string|Command)}
	   */

	  alias(alias) {
	    if (alias === undefined) return this._aliases[0]; // just return first, for backwards compatibility

	    /** @type {Command} */
	    // eslint-disable-next-line @typescript-eslint/no-this-alias
	    let command = this;
	    if (
	      this.commands.length !== 0 &&
	      this.commands[this.commands.length - 1]._executableHandler
	    ) {
	      // assume adding alias for last added executable subcommand, rather than this
	      command = this.commands[this.commands.length - 1];
	    }

	    if (alias === command._name)
	      throw new Error("Command alias can't be the same as its name");
	    const matchingCommand = this.parent?._findCommand(alias);
	    if (matchingCommand) {
	      // c.f. _registerCommand
	      const existingCmd = [matchingCommand.name()]
	        .concat(matchingCommand.aliases())
	        .join('|');
	      throw new Error(
	        `cannot add alias '${alias}' to command '${this.name()}' as already have command '${existingCmd}'`,
	      );
	    }

	    command._aliases.push(alias);
	    return this;
	  }

	  /**
	   * Set aliases for the command.
	   *
	   * Only the first alias is shown in the auto-generated help.
	   *
	   * @param {string[]} [aliases]
	   * @return {(string[]|Command)}
	   */

	  aliases(aliases) {
	    // Getter for the array of aliases is the main reason for having aliases() in addition to alias().
	    if (aliases === undefined) return this._aliases;

	    aliases.forEach((alias) => this.alias(alias));
	    return this;
	  }

	  /**
	   * Set / get the command usage `str`.
	   *
	   * @param {string} [str]
	   * @return {(string|Command)}
	   */

	  usage(str) {
	    if (str === undefined) {
	      if (this._usage) return this._usage;

	      const args = this.registeredArguments.map((arg) => {
	        return humanReadableArgName(arg);
	      });
	      return []
	        .concat(
	          this.options.length || this._helpOption !== null ? '[options]' : [],
	          this.commands.length ? '[command]' : [],
	          this.registeredArguments.length ? args : [],
	        )
	        .join(' ');
	    }

	    this._usage = str;
	    return this;
	  }

	  /**
	   * Get or set the name of the command.
	   *
	   * @param {string} [str]
	   * @return {(string|Command)}
	   */

	  name(str) {
	    if (str === undefined) return this._name;
	    this._name = str;
	    return this;
	  }

	  /**
	   * Set the name of the command from script filename, such as process.argv[1],
	   * or require.main.filename, or __filename.
	   *
	   * (Used internally and public although not documented in README.)
	   *
	   * @example
	   * program.nameFromFilename(require.main.filename);
	   *
	   * @param {string} filename
	   * @return {Command}
	   */

	  nameFromFilename(filename) {
	    this._name = path.basename(filename, path.extname(filename));

	    return this;
	  }

	  /**
	   * Get or set the directory for searching for executable subcommands of this command.
	   *
	   * @example
	   * program.executableDir(__dirname);
	   * // or
	   * program.executableDir('subcommands');
	   *
	   * @param {string} [path]
	   * @return {(string|null|Command)}
	   */

	  executableDir(path) {
	    if (path === undefined) return this._executableDir;
	    this._executableDir = path;
	    return this;
	  }

	  /**
	   * Return program help documentation.
	   *
	   * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
	   * @return {string}
	   */

	  helpInformation(contextOptions) {
	    const helper = this.createHelp();
	    if (helper.helpWidth === undefined) {
	      helper.helpWidth =
	        contextOptions && contextOptions.error
	          ? this._outputConfiguration.getErrHelpWidth()
	          : this._outputConfiguration.getOutHelpWidth();
	    }
	    return helper.formatHelp(this, helper);
	  }

	  /**
	   * @private
	   */

	  _getHelpContext(contextOptions) {
	    contextOptions = contextOptions || {};
	    const context = { error: !!contextOptions.error };
	    let write;
	    if (context.error) {
	      write = (arg) => this._outputConfiguration.writeErr(arg);
	    } else {
	      write = (arg) => this._outputConfiguration.writeOut(arg);
	    }
	    context.write = contextOptions.write || write;
	    context.command = this;
	    return context;
	  }

	  /**
	   * Output help information for this command.
	   *
	   * Outputs built-in help, and custom text added using `.addHelpText()`.
	   *
	   * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
	   */

	  outputHelp(contextOptions) {
	    let deprecatedCallback;
	    if (typeof contextOptions === 'function') {
	      deprecatedCallback = contextOptions;
	      contextOptions = undefined;
	    }
	    const context = this._getHelpContext(contextOptions);

	    this._getCommandAndAncestors()
	      .reverse()
	      .forEach((command) => command.emit('beforeAllHelp', context));
	    this.emit('beforeHelp', context);

	    let helpInformation = this.helpInformation(context);
	    if (deprecatedCallback) {
	      helpInformation = deprecatedCallback(helpInformation);
	      if (
	        typeof helpInformation !== 'string' &&
	        !Buffer.isBuffer(helpInformation)
	      ) {
	        throw new Error('outputHelp callback must return a string or a Buffer');
	      }
	    }
	    context.write(helpInformation);

	    if (this._getHelpOption()?.long) {
	      this.emit(this._getHelpOption().long); // deprecated
	    }
	    this.emit('afterHelp', context);
	    this._getCommandAndAncestors().forEach((command) =>
	      command.emit('afterAllHelp', context),
	    );
	  }

	  /**
	   * You can pass in flags and a description to customise the built-in help option.
	   * Pass in false to disable the built-in help option.
	   *
	   * @example
	   * program.helpOption('-?, --help' 'show help'); // customise
	   * program.helpOption(false); // disable
	   *
	   * @param {(string | boolean)} flags
	   * @param {string} [description]
	   * @return {Command} `this` command for chaining
	   */

	  helpOption(flags, description) {
	    // Support disabling built-in help option.
	    if (typeof flags === 'boolean') {
	      if (flags) {
	        this._helpOption = this._helpOption ?? undefined; // preserve existing option
	      } else {
	        this._helpOption = null; // disable
	      }
	      return this;
	    }

	    // Customise flags and description.
	    flags = flags ?? '-h, --help';
	    description = description ?? 'display help for command';
	    this._helpOption = this.createOption(flags, description);

	    return this;
	  }

	  /**
	   * Lazy create help option.
	   * Returns null if has been disabled with .helpOption(false).
	   *
	   * @returns {(Option | null)} the help option
	   * @package
	   */
	  _getHelpOption() {
	    // Lazy create help option on demand.
	    if (this._helpOption === undefined) {
	      this.helpOption(undefined, undefined);
	    }
	    return this._helpOption;
	  }

	  /**
	   * Supply your own option to use for the built-in help option.
	   * This is an alternative to using helpOption() to customise the flags and description etc.
	   *
	   * @param {Option} option
	   * @return {Command} `this` command for chaining
	   */
	  addHelpOption(option) {
	    this._helpOption = option;
	    return this;
	  }

	  /**
	   * Output help information and exit.
	   *
	   * Outputs built-in help, and custom text added using `.addHelpText()`.
	   *
	   * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
	   */

	  help(contextOptions) {
	    this.outputHelp(contextOptions);
	    let exitCode = process.exitCode || 0;
	    if (
	      exitCode === 0 &&
	      contextOptions &&
	      typeof contextOptions !== 'function' &&
	      contextOptions.error
	    ) {
	      exitCode = 1;
	    }
	    // message: do not have all displayed text available so only passing placeholder.
	    this._exit(exitCode, 'commander.help', '(outputHelp)');
	  }

	  /**
	   * Add additional text to be displayed with the built-in help.
	   *
	   * Position is 'before' or 'after' to affect just this command,
	   * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
	   *
	   * @param {string} position - before or after built-in help
	   * @param {(string | Function)} text - string to add, or a function returning a string
	   * @return {Command} `this` command for chaining
	   */
	  addHelpText(position, text) {
	    const allowedValues = ['beforeAll', 'before', 'after', 'afterAll'];
	    if (!allowedValues.includes(position)) {
	      throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
	    }
	    const helpEvent = `${position}Help`;
	    this.on(helpEvent, (context) => {
	      let helpStr;
	      if (typeof text === 'function') {
	        helpStr = text({ error: context.error, command: context.command });
	      } else {
	        helpStr = text;
	      }
	      // Ignore falsy value when nothing to output.
	      if (helpStr) {
	        context.write(`${helpStr}\n`);
	      }
	    });
	    return this;
	  }

	  /**
	   * Output help information if help flags specified
	   *
	   * @param {Array} args - array of options to search for help flags
	   * @private
	   */

	  _outputHelpIfRequested(args) {
	    const helpOption = this._getHelpOption();
	    const helpRequested = helpOption && args.find((arg) => helpOption.is(arg));
	    if (helpRequested) {
	      this.outputHelp();
	      // (Do not have all displayed text available so only passing placeholder.)
	      this._exit(0, 'commander.helpDisplayed', '(outputHelp)');
	    }
	  }
	}

	/**
	 * Scan arguments and increment port number for inspect calls (to avoid conflicts when spawning new command).
	 *
	 * @param {string[]} args - array of arguments from node.execArgv
	 * @returns {string[]}
	 * @private
	 */

	function incrementNodeInspectorPort(args) {
	  // Testing for these options:
	  //  --inspect[=[host:]port]
	  //  --inspect-brk[=[host:]port]
	  //  --inspect-port=[host:]port
	  return args.map((arg) => {
	    if (!arg.startsWith('--inspect')) {
	      return arg;
	    }
	    let debugOption;
	    let debugHost = '127.0.0.1';
	    let debugPort = '9229';
	    let match;
	    if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
	      // e.g. --inspect
	      debugOption = match[1];
	    } else if (
	      (match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null
	    ) {
	      debugOption = match[1];
	      if (/^\d+$/.test(match[3])) {
	        // e.g. --inspect=1234
	        debugPort = match[3];
	      } else {
	        // e.g. --inspect=localhost
	        debugHost = match[3];
	      }
	    } else if (
	      (match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null
	    ) {
	      // e.g. --inspect=localhost:1234
	      debugOption = match[1];
	      debugHost = match[3];
	      debugPort = match[4];
	    }

	    if (debugOption && debugPort !== '0') {
	      return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
	    }
	    return arg;
	  });
	}

	command.Command = Command;
	return command;
}

var hasRequiredCommander;

function requireCommander () {
	if (hasRequiredCommander) return commander$1;
	hasRequiredCommander = 1;
	const { Argument } = requireArgument();
	const { Command } = requireCommand();
	const { CommanderError, InvalidArgumentError } = requireError();
	const { Help } = requireHelp();
	const { Option } = requireOption();

	commander$1.program = new Command();

	commander$1.createCommand = (name) => new Command(name);
	commander$1.createOption = (flags, description) => new Option(flags, description);
	commander$1.createArgument = (name, description) => new Argument(name, description);

	/**
	 * Expose classes
	 */

	commander$1.Command = Command;
	commander$1.Option = Option;
	commander$1.Argument = Argument;
	commander$1.Help = Help;

	commander$1.CommanderError = CommanderError;
	commander$1.InvalidArgumentError = InvalidArgumentError;
	commander$1.InvalidOptionArgumentError = InvalidArgumentError; // Deprecated
	return commander$1;
}

var commanderExports = requireCommander();
var commander = /*@__PURE__*/getDefaultExportFromCjs(commanderExports);

// wrapper to provide named exports for ESM.
const {
  program,
  createCommand,
  createArgument,
  createOption,
  CommanderError,
  InvalidArgumentError,
  InvalidOptionArgumentError, // deprecated old name
  Command,
  Argument,
  Option,
  Help,
} = commander;

var lib$1 = {exports: {}};

var colors$1 = {exports: {}};

var styles = {exports: {}};

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var hasRequiredStyles;

function requireStyles () {
	if (hasRequiredStyles) return styles.exports;
	hasRequiredStyles = 1;
	(function (module) {
		var styles = {};
		module['exports'] = styles;

		var codes = {
		  reset: [0, 0],

		  bold: [1, 22],
		  dim: [2, 22],
		  italic: [3, 23],
		  underline: [4, 24],
		  inverse: [7, 27],
		  hidden: [8, 28],
		  strikethrough: [9, 29],

		  black: [30, 39],
		  red: [31, 39],
		  green: [32, 39],
		  yellow: [33, 39],
		  blue: [34, 39],
		  magenta: [35, 39],
		  cyan: [36, 39],
		  white: [37, 39],
		  gray: [90, 39],
		  grey: [90, 39],

		  brightRed: [91, 39],
		  brightGreen: [92, 39],
		  brightYellow: [93, 39],
		  brightBlue: [94, 39],
		  brightMagenta: [95, 39],
		  brightCyan: [96, 39],
		  brightWhite: [97, 39],

		  bgBlack: [40, 49],
		  bgRed: [41, 49],
		  bgGreen: [42, 49],
		  bgYellow: [43, 49],
		  bgBlue: [44, 49],
		  bgMagenta: [45, 49],
		  bgCyan: [46, 49],
		  bgWhite: [47, 49],
		  bgGray: [100, 49],
		  bgGrey: [100, 49],

		  bgBrightRed: [101, 49],
		  bgBrightGreen: [102, 49],
		  bgBrightYellow: [103, 49],
		  bgBrightBlue: [104, 49],
		  bgBrightMagenta: [105, 49],
		  bgBrightCyan: [106, 49],
		  bgBrightWhite: [107, 49],

		  // legacy styles for colors pre v1.0.0
		  blackBG: [40, 49],
		  redBG: [41, 49],
		  greenBG: [42, 49],
		  yellowBG: [43, 49],
		  blueBG: [44, 49],
		  magentaBG: [45, 49],
		  cyanBG: [46, 49],
		  whiteBG: [47, 49],

		};

		Object.keys(codes).forEach(function(key) {
		  var val = codes[key];
		  var style = styles[key] = [];
		  style.open = '\u001b[' + val[0] + 'm';
		  style.close = '\u001b[' + val[1] + 'm';
		}); 
	} (styles));
	return styles.exports;
}

/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var hasFlag;
var hasRequiredHasFlag;

function requireHasFlag () {
	if (hasRequiredHasFlag) return hasFlag;
	hasRequiredHasFlag = 1;

	hasFlag = function(flag, argv) {
	  argv = argv || process.argv;

	  var terminatorPos = argv.indexOf('--');
	  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
	  var pos = argv.indexOf(prefix + flag);

	  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
	};
	return hasFlag;
}

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var supportsColors;
var hasRequiredSupportsColors;

function requireSupportsColors () {
	if (hasRequiredSupportsColors) return supportsColors;
	hasRequiredSupportsColors = 1;

	var os = require$$0$1;
	var hasFlag = requireHasFlag();

	var env = process.env;

	var forceColor = void 0;
	if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
	  forceColor = false;
	} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
	           || hasFlag('color=always')) {
	  forceColor = true;
	}
	if ('FORCE_COLOR' in env) {
	  forceColor = env.FORCE_COLOR.length === 0
	    || parseInt(env.FORCE_COLOR, 10) !== 0;
	}

	function translateLevel(level) {
	  if (level === 0) {
	    return false;
	  }

	  return {
	    level: level,
	    hasBasic: true,
	    has256: level >= 2,
	    has16m: level >= 3,
	  };
	}

	function supportsColor(stream) {
	  if (forceColor === false) {
	    return 0;
	  }

	  if (hasFlag('color=16m') || hasFlag('color=full')
	      || hasFlag('color=truecolor')) {
	    return 3;
	  }

	  if (hasFlag('color=256')) {
	    return 2;
	  }

	  if (stream && !stream.isTTY && forceColor !== true) {
	    return 0;
	  }

	  var min = forceColor ? 1 : 0;

	  if (process.platform === 'win32') {
	    // Node.js 7.5.0 is the first version of Node.js to include a patch to
	    // libuv that enables 256 color output on Windows. Anything earlier and it
	    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
	    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
	    // Windows release that supports 256 colors. Windows 10 build 14931 is the
	    // first release that supports 16m/TrueColor.
	    var osRelease = os.release().split('.');
	    if (Number(process.versions.node.split('.')[0]) >= 8
	        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
	      return Number(osRelease[2]) >= 14931 ? 3 : 2;
	    }

	    return 1;
	  }

	  if ('CI' in env) {
	    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
	      return sign in env;
	    }) || env.CI_NAME === 'codeship') {
	      return 1;
	    }

	    return min;
	  }

	  if ('TEAMCITY_VERSION' in env) {
	    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
	    );
	  }

	  if ('TERM_PROGRAM' in env) {
	    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

	    switch (env.TERM_PROGRAM) {
	      case 'iTerm.app':
	        return version >= 3 ? 3 : 2;
	      case 'Hyper':
	        return 3;
	      case 'Apple_Terminal':
	        return 2;
	      // No default
	    }
	  }

	  if (/-256(color)?$/i.test(env.TERM)) {
	    return 2;
	  }

	  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
	    return 1;
	  }

	  if ('COLORTERM' in env) {
	    return 1;
	  }

	  if (env.TERM === 'dumb') {
	    return min;
	  }

	  return min;
	}

	function getSupportLevel(stream) {
	  var level = supportsColor(stream);
	  return translateLevel(level);
	}

	supportsColors = {
	  supportsColor: getSupportLevel,
	  stdout: getSupportLevel(process.stdout),
	  stderr: getSupportLevel(process.stderr),
	};
	return supportsColors;
}

var trap = {exports: {}};

var hasRequiredTrap;

function requireTrap () {
	if (hasRequiredTrap) return trap.exports;
	hasRequiredTrap = 1;
	(function (module) {
		module['exports'] = function runTheTrap(text, options) {
		  var result = '';
		  text = text || 'Run the trap, drop the bass';
		  text = text.split('');
		  var trap = {
		    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
		    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
		    c: ['\u00a9', '\u023b', '\u03fe'],
		    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
		    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
		      '\u0a6c'],
		    f: ['\u04fa'],
		    g: ['\u0262'],
		    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
		    i: ['\u0f0f'],
		    j: ['\u0134'],
		    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
		    l: ['\u0139'],
		    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
		    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
		    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
		      '\u06dd', '\u0e4f'],
		    p: ['\u01f7', '\u048e'],
		    q: ['\u09cd'],
		    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
		    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
		    t: ['\u0141', '\u0166', '\u0373'],
		    u: ['\u01b1', '\u054d'],
		    v: ['\u05d8'],
		    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
		    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
		    y: ['\u00a5', '\u04b0', '\u04cb'],
		    z: ['\u01b5', '\u0240'],
		  };
		  text.forEach(function(c) {
		    c = c.toLowerCase();
		    var chars = trap[c] || [' '];
		    var rand = Math.floor(Math.random() * chars.length);
		    if (typeof trap[c] !== 'undefined') {
		      result += trap[c][rand];
		    } else {
		      result += c;
		    }
		  });
		  return result;
		}; 
	} (trap));
	return trap.exports;
}

var zalgo = {exports: {}};

var hasRequiredZalgo;

function requireZalgo () {
	if (hasRequiredZalgo) return zalgo.exports;
	hasRequiredZalgo = 1;
	(function (module) {
		// please no
		module['exports'] = function zalgo(text, options) {
		  text = text || '   he is here   ';
		  var soul = {
		    'up': [
		      '̍', '̎', '̄', '̅',
		      '̿', '̑', '̆', '̐',
		      '͒', '͗', '͑', '̇',
		      '̈', '̊', '͂', '̓',
		      '̈', '͊', '͋', '͌',
		      '̃', '̂', '̌', '͐',
		      '̀', '́', '̋', '̏',
		      '̒', '̓', '̔', '̽',
		      '̉', 'ͣ', 'ͤ', 'ͥ',
		      'ͦ', 'ͧ', 'ͨ', 'ͩ',
		      'ͪ', 'ͫ', 'ͬ', 'ͭ',
		      'ͮ', 'ͯ', '̾', '͛',
		      '͆', '̚',
		    ],
		    'down': [
		      '̖', '̗', '̘', '̙',
		      '̜', '̝', '̞', '̟',
		      '̠', '̤', '̥', '̦',
		      '̩', '̪', '̫', '̬',
		      '̭', '̮', '̯', '̰',
		      '̱', '̲', '̳', '̹',
		      '̺', '̻', '̼', 'ͅ',
		      '͇', '͈', '͉', '͍',
		      '͎', '͓', '͔', '͕',
		      '͖', '͙', '͚', '̣',
		    ],
		    'mid': [
		      '̕', '̛', '̀', '́',
		      '͘', '̡', '̢', '̧',
		      '̨', '̴', '̵', '̶',
		      '͜', '͝', '͞',
		      '͟', '͠', '͢', '̸',
		      '̷', '͡', ' ҉',
		    ],
		  };
		  var all = [].concat(soul.up, soul.down, soul.mid);

		  function randomNumber(range) {
		    var r = Math.floor(Math.random() * range);
		    return r;
		  }

		  function isChar(character) {
		    var bool = false;
		    all.filter(function(i) {
		      bool = (i === character);
		    });
		    return bool;
		  }


		  function heComes(text, options) {
		    var result = '';
		    var counts;
		    var l;
		    options = options || {};
		    options['up'] =
		      typeof options['up'] !== 'undefined' ? options['up'] : true;
		    options['mid'] =
		      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
		    options['down'] =
		      typeof options['down'] !== 'undefined' ? options['down'] : true;
		    options['size'] =
		      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
		    text = text.split('');
		    for (l in text) {
		      if (isChar(l)) {
		        continue;
		      }
		      result = result + text[l];
		      counts = {'up': 0, 'down': 0, 'mid': 0};
		      switch (options.size) {
		        case 'mini':
		          counts.up = randomNumber(8);
		          counts.mid = randomNumber(2);
		          counts.down = randomNumber(8);
		          break;
		        case 'maxi':
		          counts.up = randomNumber(16) + 3;
		          counts.mid = randomNumber(4) + 1;
		          counts.down = randomNumber(64) + 3;
		          break;
		        default:
		          counts.up = randomNumber(8) + 1;
		          counts.mid = randomNumber(6) / 2;
		          counts.down = randomNumber(8) + 1;
		          break;
		      }

		      var arr = ['up', 'mid', 'down'];
		      for (var d in arr) {
		        var index = arr[d];
		        for (var i = 0; i <= counts[index]; i++) {
		          if (options[index]) {
		            result = result + soul[index][randomNumber(soul[index].length)];
		          }
		        }
		      }
		    }
		    return result;
		  }
		  // don't summon him
		  return heComes(text, options);
		}; 
	} (zalgo));
	return zalgo.exports;
}

var america = {exports: {}};

var hasRequiredAmerica;

function requireAmerica () {
	if (hasRequiredAmerica) return america.exports;
	hasRequiredAmerica = 1;
	(function (module) {
		module['exports'] = function(colors) {
		  return function(letter, i, exploded) {
		    if (letter === ' ') return letter;
		    switch (i%3) {
		      case 0: return colors.red(letter);
		      case 1: return colors.white(letter);
		      case 2: return colors.blue(letter);
		    }
		  };
		}; 
	} (america));
	return america.exports;
}

var zebra = {exports: {}};

var hasRequiredZebra;

function requireZebra () {
	if (hasRequiredZebra) return zebra.exports;
	hasRequiredZebra = 1;
	(function (module) {
		module['exports'] = function(colors) {
		  return function(letter, i, exploded) {
		    return i % 2 === 0 ? letter : colors.inverse(letter);
		  };
		}; 
	} (zebra));
	return zebra.exports;
}

var rainbow = {exports: {}};

var hasRequiredRainbow;

function requireRainbow () {
	if (hasRequiredRainbow) return rainbow.exports;
	hasRequiredRainbow = 1;
	(function (module) {
		module['exports'] = function(colors) {
		  // RoY G BiV
		  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
		  return function(letter, i, exploded) {
		    if (letter === ' ') {
		      return letter;
		    } else {
		      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
		    }
		  };
		}; 
	} (rainbow));
	return rainbow.exports;
}

var random = {exports: {}};

var hasRequiredRandom;

function requireRandom () {
	if (hasRequiredRandom) return random.exports;
	hasRequiredRandom = 1;
	(function (module) {
		module['exports'] = function(colors) {
		  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
		    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
		    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
		  return function(letter, i, exploded) {
		    return letter === ' ' ? letter :
		      colors[
		          available[Math.round(Math.random() * (available.length - 2))]
		      ](letter);
		  };
		}; 
	} (random));
	return random.exports;
}

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var hasRequiredColors;

function requireColors () {
	if (hasRequiredColors) return colors$1.exports;
	hasRequiredColors = 1;
	(function (module) {
		var colors = {};
		module['exports'] = colors;

		colors.themes = {};

		var util = require$$0$2;
		var ansiStyles = colors.styles = requireStyles();
		var defineProps = Object.defineProperties;
		var newLineRegex = new RegExp(/[\r\n]+/g);

		colors.supportsColor = requireSupportsColors().supportsColor;

		if (typeof colors.enabled === 'undefined') {
		  colors.enabled = colors.supportsColor() !== false;
		}

		colors.enable = function() {
		  colors.enabled = true;
		};

		colors.disable = function() {
		  colors.enabled = false;
		};

		colors.stripColors = colors.strip = function(str) {
		  return ('' + str).replace(/\x1B\[\d+m/g, '');
		};

		// eslint-disable-next-line no-unused-vars
		colors.stylize = function stylize(str, style) {
		  if (!colors.enabled) {
		    return str+'';
		  }

		  var styleMap = ansiStyles[style];

		  // Stylize should work for non-ANSI styles, too
		  if(!styleMap && style in colors){
		    // Style maps like trap operate as functions on strings;
		    // they don't have properties like open or close.
		    return colors[style](str);
		  }

		  return styleMap.open + str + styleMap.close;
		};

		var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
		var escapeStringRegexp = function(str) {
		  if (typeof str !== 'string') {
		    throw new TypeError('Expected a string');
		  }
		  return str.replace(matchOperatorsRe, '\\$&');
		};

		function build(_styles) {
		  var builder = function builder() {
		    return applyStyle.apply(builder, arguments);
		  };
		  builder._styles = _styles;
		  // __proto__ is used because we must return a function, but there is
		  // no way to create a function with a different prototype.
		  builder.__proto__ = proto;
		  return builder;
		}

		var styles = (function() {
		  var ret = {};
		  ansiStyles.grey = ansiStyles.gray;
		  Object.keys(ansiStyles).forEach(function(key) {
		    ansiStyles[key].closeRe =
		      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
		    ret[key] = {
		      get: function() {
		        return build(this._styles.concat(key));
		      },
		    };
		  });
		  return ret;
		})();

		var proto = defineProps(function colors() {}, styles);

		function applyStyle() {
		  var args = Array.prototype.slice.call(arguments);

		  var str = args.map(function(arg) {
		    // Use weak equality check so we can colorize null/undefined in safe mode
		    if (arg != null && arg.constructor === String) {
		      return arg;
		    } else {
		      return util.inspect(arg);
		    }
		  }).join(' ');

		  if (!colors.enabled || !str) {
		    return str;
		  }

		  var newLinesPresent = str.indexOf('\n') != -1;

		  var nestedStyles = this._styles;

		  var i = nestedStyles.length;
		  while (i--) {
		    var code = ansiStyles[nestedStyles[i]];
		    str = code.open + str.replace(code.closeRe, code.open) + code.close;
		    if (newLinesPresent) {
		      str = str.replace(newLineRegex, function(match) {
		        return code.close + match + code.open;
		      });
		    }
		  }

		  return str;
		}

		colors.setTheme = function(theme) {
		  if (typeof theme === 'string') {
		    console.log('colors.setTheme now only accepts an object, not a string.  ' +
		      'If you are trying to set a theme from a file, it is now your (the ' +
		      'caller\'s) responsibility to require the file.  The old syntax ' +
		      'looked like colors.setTheme(__dirname + ' +
		      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
		      'colors.setTheme(require(__dirname + ' +
		      '\'/../themes/generic-logging.js\'));');
		    return;
		  }
		  for (var style in theme) {
		    (function(style) {
		      colors[style] = function(str) {
		        if (typeof theme[style] === 'object') {
		          var out = str;
		          for (var i in theme[style]) {
		            out = colors[theme[style][i]](out);
		          }
		          return out;
		        }
		        return colors[theme[style]](str);
		      };
		    })(style);
		  }
		};

		function init() {
		  var ret = {};
		  Object.keys(styles).forEach(function(name) {
		    ret[name] = {
		      get: function() {
		        return build([name]);
		      },
		    };
		  });
		  return ret;
		}

		var sequencer = function sequencer(map, str) {
		  var exploded = str.split('');
		  exploded = exploded.map(map);
		  return exploded.join('');
		};

		// custom formatter methods
		colors.trap = requireTrap();
		colors.zalgo = requireZalgo();

		// maps
		colors.maps = {};
		colors.maps.america = requireAmerica()(colors);
		colors.maps.zebra = requireZebra()(colors);
		colors.maps.rainbow = requireRainbow()(colors);
		colors.maps.random = requireRandom()(colors);

		for (var map in colors.maps) {
		  (function(map) {
		    colors[map] = function(str) {
		      return sequencer(colors.maps[map], str);
		    };
		  })(map);
		}

		defineProps(colors, init()); 
	} (colors$1));
	return colors$1.exports;
}

var extendStringPrototype = {exports: {}};

var hasRequiredExtendStringPrototype;

function requireExtendStringPrototype () {
	if (hasRequiredExtendStringPrototype) return extendStringPrototype.exports;
	hasRequiredExtendStringPrototype = 1;
	(function (module) {
		var colors = requireColors();

		module['exports'] = function() {
		  //
		  // Extends prototype of native string object to allow for "foo".red syntax
		  //
		  var addProperty = function(color, func) {
		    String.prototype.__defineGetter__(color, func);
		  };

		  addProperty('strip', function() {
		    return colors.strip(this);
		  });

		  addProperty('stripColors', function() {
		    return colors.strip(this);
		  });

		  addProperty('trap', function() {
		    return colors.trap(this);
		  });

		  addProperty('zalgo', function() {
		    return colors.zalgo(this);
		  });

		  addProperty('zebra', function() {
		    return colors.zebra(this);
		  });

		  addProperty('rainbow', function() {
		    return colors.rainbow(this);
		  });

		  addProperty('random', function() {
		    return colors.random(this);
		  });

		  addProperty('america', function() {
		    return colors.america(this);
		  });

		  //
		  // Iterate through all default styles and colors
		  //
		  var x = Object.keys(colors.styles);
		  x.forEach(function(style) {
		    addProperty(style, function() {
		      return colors.stylize(this, style);
		    });
		  });

		  function applyTheme(theme) {
		    //
		    // Remark: This is a list of methods that exist
		    // on String that you should not overwrite.
		    //
		    var stringPrototypeBlacklist = [
		      '__defineGetter__', '__defineSetter__', '__lookupGetter__',
		      '__lookupSetter__', 'charAt', 'constructor', 'hasOwnProperty',
		      'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString',
		      'valueOf', 'charCodeAt', 'indexOf', 'lastIndexOf', 'length',
		      'localeCompare', 'match', 'repeat', 'replace', 'search', 'slice',
		      'split', 'substring', 'toLocaleLowerCase', 'toLocaleUpperCase',
		      'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight',
		    ];

		    Object.keys(theme).forEach(function(prop) {
		      if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
		        console.log('warn: '.red + ('String.prototype' + prop).magenta +
		          ' is probably something you don\'t want to override.  ' +
		          'Ignoring style name');
		      } else {
		        if (typeof(theme[prop]) === 'string') {
		          colors[prop] = colors[theme[prop]];
		          addProperty(prop, function() {
		            return colors[prop](this);
		          });
		        } else {
		          var themePropApplicator = function(str) {
		            var ret = str || this;
		            for (var t = 0; t < theme[prop].length; t++) {
		              ret = colors[theme[prop][t]](ret);
		            }
		            return ret;
		          };
		          addProperty(prop, themePropApplicator);
		          colors[prop] = function(str) {
		            return themePropApplicator(str);
		          };
		        }
		      }
		    });
		  }

		  colors.setTheme = function(theme) {
		    if (typeof theme === 'string') {
		      console.log('colors.setTheme now only accepts an object, not a string. ' +
		        'If you are trying to set a theme from a file, it is now your (the ' +
		        'caller\'s) responsibility to require the file.  The old syntax ' +
		        'looked like colors.setTheme(__dirname + ' +
		        '\'/../themes/generic-logging.js\'); The new syntax looks like '+
		        'colors.setTheme(require(__dirname + ' +
		        '\'/../themes/generic-logging.js\'));');
		      return;
		    } else {
		      applyTheme(theme);
		    }
		  };
		}; 
	} (extendStringPrototype));
	return extendStringPrototype.exports;
}

var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib$1.exports;
	hasRequiredLib$1 = 1;
	(function (module) {
		var colors = requireColors();
		module['exports'] = colors;

		// Remark: By default, colors will add style properties to String.prototype.
		//
		// If you don't wish to extend String.prototype, you can do this instead and
		// native String will not be touched:
		//
		//   var colors = require('colors/safe);
		//   colors.red("foo")
		//
		//
		requireExtendStringPrototype()(); 
	} (lib$1));
	return lib$1.exports;
}

var libExports$1 = requireLib$1();
var colors = /*@__PURE__*/getDefaultExportFromCjs(libExports$1);

var fs$1 = {};

var universalify = {};

var hasRequiredUniversalify;

function requireUniversalify () {
	if (hasRequiredUniversalify) return universalify;
	hasRequiredUniversalify = 1;

	universalify.fromCallback = function (fn) {
	  return Object.defineProperty(function (...args) {
	    if (typeof args[args.length - 1] === 'function') fn.apply(this, args);
	    else {
	      return new Promise((resolve, reject) => {
	        args.push((err, res) => (err != null) ? reject(err) : resolve(res));
	        fn.apply(this, args);
	      })
	    }
	  }, 'name', { value: fn.name })
	};

	universalify.fromPromise = function (fn) {
	  return Object.defineProperty(function (...args) {
	    const cb = args[args.length - 1];
	    if (typeof cb !== 'function') return fn.apply(this, args)
	    else {
	      args.pop();
	      fn.apply(this, args).then(r => cb(null, r), cb);
	    }
	  }, 'name', { value: fn.name })
	};
	return universalify;
}

var polyfills;
var hasRequiredPolyfills;

function requirePolyfills () {
	if (hasRequiredPolyfills) return polyfills;
	hasRequiredPolyfills = 1;
	var constants = require$$0$3;

	var origCwd = process.cwd;
	var cwd = null;

	var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;

	process.cwd = function() {
	  if (!cwd)
	    cwd = origCwd.call(process);
	  return cwd
	};
	try {
	  process.cwd();
	} catch (er) {}

	// This check is needed until node.js 12 is required
	if (typeof process.chdir === 'function') {
	  var chdir = process.chdir;
	  process.chdir = function (d) {
	    cwd = null;
	    chdir.call(process, d);
	  };
	  if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
	}

	polyfills = patch;

	function patch (fs) {
	  // (re-)implement some things that are known busted or missing.

	  // lchmod, broken prior to 0.6.2
	  // back-port the fix here.
	  if (constants.hasOwnProperty('O_SYMLINK') &&
	      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
	    patchLchmod(fs);
	  }

	  // lutimes implementation, or no-op
	  if (!fs.lutimes) {
	    patchLutimes(fs);
	  }

	  // https://github.com/isaacs/node-graceful-fs/issues/4
	  // Chown should not fail on einval or eperm if non-root.
	  // It should not fail on enosys ever, as this just indicates
	  // that a fs doesn't support the intended operation.

	  fs.chown = chownFix(fs.chown);
	  fs.fchown = chownFix(fs.fchown);
	  fs.lchown = chownFix(fs.lchown);

	  fs.chmod = chmodFix(fs.chmod);
	  fs.fchmod = chmodFix(fs.fchmod);
	  fs.lchmod = chmodFix(fs.lchmod);

	  fs.chownSync = chownFixSync(fs.chownSync);
	  fs.fchownSync = chownFixSync(fs.fchownSync);
	  fs.lchownSync = chownFixSync(fs.lchownSync);

	  fs.chmodSync = chmodFixSync(fs.chmodSync);
	  fs.fchmodSync = chmodFixSync(fs.fchmodSync);
	  fs.lchmodSync = chmodFixSync(fs.lchmodSync);

	  fs.stat = statFix(fs.stat);
	  fs.fstat = statFix(fs.fstat);
	  fs.lstat = statFix(fs.lstat);

	  fs.statSync = statFixSync(fs.statSync);
	  fs.fstatSync = statFixSync(fs.fstatSync);
	  fs.lstatSync = statFixSync(fs.lstatSync);

	  // if lchmod/lchown do not exist, then make them no-ops
	  if (fs.chmod && !fs.lchmod) {
	    fs.lchmod = function (path, mode, cb) {
	      if (cb) process.nextTick(cb);
	    };
	    fs.lchmodSync = function () {};
	  }
	  if (fs.chown && !fs.lchown) {
	    fs.lchown = function (path, uid, gid, cb) {
	      if (cb) process.nextTick(cb);
	    };
	    fs.lchownSync = function () {};
	  }

	  // on Windows, A/V software can lock the directory, causing this
	  // to fail with an EACCES or EPERM if the directory contains newly
	  // created files.  Try again on failure, for up to 60 seconds.

	  // Set the timeout this long because some Windows Anti-Virus, such as Parity
	  // bit9, may lock files for up to a minute, causing npm package install
	  // failures. Also, take care to yield the scheduler. Windows scheduling gives
	  // CPU to a busy looping process, which can cause the program causing the lock
	  // contention to be starved of CPU by node, so the contention doesn't resolve.
	  if (platform === "win32") {
	    fs.rename = typeof fs.rename !== 'function' ? fs.rename
	    : (function (fs$rename) {
	      function rename (from, to, cb) {
	        var start = Date.now();
	        var backoff = 0;
	        fs$rename(from, to, function CB (er) {
	          if (er
	              && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY")
	              && Date.now() - start < 60000) {
	            setTimeout(function() {
	              fs.stat(to, function (stater, st) {
	                if (stater && stater.code === "ENOENT")
	                  fs$rename(from, to, CB);
	                else
	                  cb(er);
	              });
	            }, backoff);
	            if (backoff < 100)
	              backoff += 10;
	            return;
	          }
	          if (cb) cb(er);
	        });
	      }
	      if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
	      return rename
	    })(fs.rename);
	  }

	  // if read() returns EAGAIN, then just try it again.
	  fs.read = typeof fs.read !== 'function' ? fs.read
	  : (function (fs$read) {
	    function read (fd, buffer, offset, length, position, callback_) {
	      var callback;
	      if (callback_ && typeof callback_ === 'function') {
	        var eagCounter = 0;
	        callback = function (er, _, __) {
	          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
	            eagCounter ++;
	            return fs$read.call(fs, fd, buffer, offset, length, position, callback)
	          }
	          callback_.apply(this, arguments);
	        };
	      }
	      return fs$read.call(fs, fd, buffer, offset, length, position, callback)
	    }

	    // This ensures `util.promisify` works as it does for native `fs.read`.
	    if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
	    return read
	  })(fs.read);

	  fs.readSync = typeof fs.readSync !== 'function' ? fs.readSync
	  : (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
	    var eagCounter = 0;
	    while (true) {
	      try {
	        return fs$readSync.call(fs, fd, buffer, offset, length, position)
	      } catch (er) {
	        if (er.code === 'EAGAIN' && eagCounter < 10) {
	          eagCounter ++;
	          continue
	        }
	        throw er
	      }
	    }
	  }})(fs.readSync);

	  function patchLchmod (fs) {
	    fs.lchmod = function (path, mode, callback) {
	      fs.open( path
	             , constants.O_WRONLY | constants.O_SYMLINK
	             , mode
	             , function (err, fd) {
	        if (err) {
	          if (callback) callback(err);
	          return
	        }
	        // prefer to return the chmod error, if one occurs,
	        // but still try to close, and report closing errors if they occur.
	        fs.fchmod(fd, mode, function (err) {
	          fs.close(fd, function(err2) {
	            if (callback) callback(err || err2);
	          });
	        });
	      });
	    };

	    fs.lchmodSync = function (path, mode) {
	      var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);

	      // prefer to return the chmod error, if one occurs,
	      // but still try to close, and report closing errors if they occur.
	      var threw = true;
	      var ret;
	      try {
	        ret = fs.fchmodSync(fd, mode);
	        threw = false;
	      } finally {
	        if (threw) {
	          try {
	            fs.closeSync(fd);
	          } catch (er) {}
	        } else {
	          fs.closeSync(fd);
	        }
	      }
	      return ret
	    };
	  }

	  function patchLutimes (fs) {
	    if (constants.hasOwnProperty("O_SYMLINK") && fs.futimes) {
	      fs.lutimes = function (path, at, mt, cb) {
	        fs.open(path, constants.O_SYMLINK, function (er, fd) {
	          if (er) {
	            if (cb) cb(er);
	            return
	          }
	          fs.futimes(fd, at, mt, function (er) {
	            fs.close(fd, function (er2) {
	              if (cb) cb(er || er2);
	            });
	          });
	        });
	      };

	      fs.lutimesSync = function (path, at, mt) {
	        var fd = fs.openSync(path, constants.O_SYMLINK);
	        var ret;
	        var threw = true;
	        try {
	          ret = fs.futimesSync(fd, at, mt);
	          threw = false;
	        } finally {
	          if (threw) {
	            try {
	              fs.closeSync(fd);
	            } catch (er) {}
	          } else {
	            fs.closeSync(fd);
	          }
	        }
	        return ret
	      };

	    } else if (fs.futimes) {
	      fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb); };
	      fs.lutimesSync = function () {};
	    }
	  }

	  function chmodFix (orig) {
	    if (!orig) return orig
	    return function (target, mode, cb) {
	      return orig.call(fs, target, mode, function (er) {
	        if (chownErOk(er)) er = null;
	        if (cb) cb.apply(this, arguments);
	      })
	    }
	  }

	  function chmodFixSync (orig) {
	    if (!orig) return orig
	    return function (target, mode) {
	      try {
	        return orig.call(fs, target, mode)
	      } catch (er) {
	        if (!chownErOk(er)) throw er
	      }
	    }
	  }


	  function chownFix (orig) {
	    if (!orig) return orig
	    return function (target, uid, gid, cb) {
	      return orig.call(fs, target, uid, gid, function (er) {
	        if (chownErOk(er)) er = null;
	        if (cb) cb.apply(this, arguments);
	      })
	    }
	  }

	  function chownFixSync (orig) {
	    if (!orig) return orig
	    return function (target, uid, gid) {
	      try {
	        return orig.call(fs, target, uid, gid)
	      } catch (er) {
	        if (!chownErOk(er)) throw er
	      }
	    }
	  }

	  function statFix (orig) {
	    if (!orig) return orig
	    // Older versions of Node erroneously returned signed integers for
	    // uid + gid.
	    return function (target, options, cb) {
	      if (typeof options === 'function') {
	        cb = options;
	        options = null;
	      }
	      function callback (er, stats) {
	        if (stats) {
	          if (stats.uid < 0) stats.uid += 0x100000000;
	          if (stats.gid < 0) stats.gid += 0x100000000;
	        }
	        if (cb) cb.apply(this, arguments);
	      }
	      return options ? orig.call(fs, target, options, callback)
	        : orig.call(fs, target, callback)
	    }
	  }

	  function statFixSync (orig) {
	    if (!orig) return orig
	    // Older versions of Node erroneously returned signed integers for
	    // uid + gid.
	    return function (target, options) {
	      var stats = options ? orig.call(fs, target, options)
	        : orig.call(fs, target);
	      if (stats) {
	        if (stats.uid < 0) stats.uid += 0x100000000;
	        if (stats.gid < 0) stats.gid += 0x100000000;
	      }
	      return stats;
	    }
	  }

	  // ENOSYS means that the fs doesn't support the op. Just ignore
	  // that, because it doesn't matter.
	  //
	  // if there's no getuid, or if getuid() is something other
	  // than 0, and the error is EINVAL or EPERM, then just ignore
	  // it.
	  //
	  // This specific case is a silent failure in cp, install, tar,
	  // and most other unix tools that manage permissions.
	  //
	  // When running as root, or if other types of errors are
	  // encountered, then it's strict.
	  function chownErOk (er) {
	    if (!er)
	      return true

	    if (er.code === "ENOSYS")
	      return true

	    var nonroot = !process.getuid || process.getuid() !== 0;
	    if (nonroot) {
	      if (er.code === "EINVAL" || er.code === "EPERM")
	        return true
	    }

	    return false
	  }
	}
	return polyfills;
}

var legacyStreams;
var hasRequiredLegacyStreams;

function requireLegacyStreams () {
	if (hasRequiredLegacyStreams) return legacyStreams;
	hasRequiredLegacyStreams = 1;
	var Stream = require$$0$4.Stream;

	legacyStreams = legacy;

	function legacy (fs) {
	  return {
	    ReadStream: ReadStream,
	    WriteStream: WriteStream
	  }

	  function ReadStream (path, options) {
	    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

	    Stream.call(this);

	    var self = this;

	    this.path = path;
	    this.fd = null;
	    this.readable = true;
	    this.paused = false;

	    this.flags = 'r';
	    this.mode = 438; /*=0666*/
	    this.bufferSize = 64 * 1024;

	    options = options || {};

	    // Mixin options into this
	    var keys = Object.keys(options);
	    for (var index = 0, length = keys.length; index < length; index++) {
	      var key = keys[index];
	      this[key] = options[key];
	    }

	    if (this.encoding) this.setEncoding(this.encoding);

	    if (this.start !== undefined) {
	      if ('number' !== typeof this.start) {
	        throw TypeError('start must be a Number');
	      }
	      if (this.end === undefined) {
	        this.end = Infinity;
	      } else if ('number' !== typeof this.end) {
	        throw TypeError('end must be a Number');
	      }

	      if (this.start > this.end) {
	        throw new Error('start must be <= end');
	      }

	      this.pos = this.start;
	    }

	    if (this.fd !== null) {
	      process.nextTick(function() {
	        self._read();
	      });
	      return;
	    }

	    fs.open(this.path, this.flags, this.mode, function (err, fd) {
	      if (err) {
	        self.emit('error', err);
	        self.readable = false;
	        return;
	      }

	      self.fd = fd;
	      self.emit('open', fd);
	      self._read();
	    });
	  }

	  function WriteStream (path, options) {
	    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

	    Stream.call(this);

	    this.path = path;
	    this.fd = null;
	    this.writable = true;

	    this.flags = 'w';
	    this.encoding = 'binary';
	    this.mode = 438; /*=0666*/
	    this.bytesWritten = 0;

	    options = options || {};

	    // Mixin options into this
	    var keys = Object.keys(options);
	    for (var index = 0, length = keys.length; index < length; index++) {
	      var key = keys[index];
	      this[key] = options[key];
	    }

	    if (this.start !== undefined) {
	      if ('number' !== typeof this.start) {
	        throw TypeError('start must be a Number');
	      }
	      if (this.start < 0) {
	        throw new Error('start must be >= zero');
	      }

	      this.pos = this.start;
	    }

	    this.busy = false;
	    this._queue = [];

	    if (this.fd === null) {
	      this._open = fs.open;
	      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
	      this.flush();
	    }
	  }
	}
	return legacyStreams;
}

var clone_1;
var hasRequiredClone;

function requireClone () {
	if (hasRequiredClone) return clone_1;
	hasRequiredClone = 1;

	clone_1 = clone;

	var getPrototypeOf = Object.getPrototypeOf || function (obj) {
	  return obj.__proto__
	};

	function clone (obj) {
	  if (obj === null || typeof obj !== 'object')
	    return obj

	  if (obj instanceof Object)
	    var copy = { __proto__: getPrototypeOf(obj) };
	  else
	    var copy = Object.create(null);

	  Object.getOwnPropertyNames(obj).forEach(function (key) {
	    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
	  });

	  return copy
	}
	return clone_1;
}

var gracefulFs;
var hasRequiredGracefulFs;

function requireGracefulFs () {
	if (hasRequiredGracefulFs) return gracefulFs;
	hasRequiredGracefulFs = 1;
	var fs = require$$0$5;
	var polyfills = requirePolyfills();
	var legacy = requireLegacyStreams();
	var clone = requireClone();

	var util = require$$0$2;

	/* istanbul ignore next - node 0.x polyfill */
	var gracefulQueue;
	var previousSymbol;

	/* istanbul ignore else - node 0.x polyfill */
	if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
	  gracefulQueue = Symbol.for('graceful-fs.queue');
	  // This is used in testing by future versions
	  previousSymbol = Symbol.for('graceful-fs.previous');
	} else {
	  gracefulQueue = '___graceful-fs.queue';
	  previousSymbol = '___graceful-fs.previous';
	}

	function noop () {}

	function publishQueue(context, queue) {
	  Object.defineProperty(context, gracefulQueue, {
	    get: function() {
	      return queue
	    }
	  });
	}

	var debug = noop;
	if (util.debuglog)
	  debug = util.debuglog('gfs4');
	else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
	  debug = function() {
	    var m = util.format.apply(util, arguments);
	    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ');
	    console.error(m);
	  };

	// Once time initialization
	if (!fs[gracefulQueue]) {
	  // This queue can be shared by multiple loaded instances
	  var queue = commonjsGlobal[gracefulQueue] || [];
	  publishQueue(fs, queue);

	  // Patch fs.close/closeSync to shared queue version, because we need
	  // to retry() whenever a close happens *anywhere* in the program.
	  // This is essential when multiple graceful-fs instances are
	  // in play at the same time.
	  fs.close = (function (fs$close) {
	    function close (fd, cb) {
	      return fs$close.call(fs, fd, function (err) {
	        // This function uses the graceful-fs shared queue
	        if (!err) {
	          resetQueue();
	        }

	        if (typeof cb === 'function')
	          cb.apply(this, arguments);
	      })
	    }

	    Object.defineProperty(close, previousSymbol, {
	      value: fs$close
	    });
	    return close
	  })(fs.close);

	  fs.closeSync = (function (fs$closeSync) {
	    function closeSync (fd) {
	      // This function uses the graceful-fs shared queue
	      fs$closeSync.apply(fs, arguments);
	      resetQueue();
	    }

	    Object.defineProperty(closeSync, previousSymbol, {
	      value: fs$closeSync
	    });
	    return closeSync
	  })(fs.closeSync);

	  if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
	    process.on('exit', function() {
	      debug(fs[gracefulQueue]);
	      require$$5.equal(fs[gracefulQueue].length, 0);
	    });
	  }
	}

	if (!commonjsGlobal[gracefulQueue]) {
	  publishQueue(commonjsGlobal, fs[gracefulQueue]);
	}

	gracefulFs = patch(clone(fs));
	if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
	    gracefulFs = patch(fs);
	    fs.__patched = true;
	}

	function patch (fs) {
	  // Everything that references the open() function needs to be in here
	  polyfills(fs);
	  fs.gracefulify = patch;

	  fs.createReadStream = createReadStream;
	  fs.createWriteStream = createWriteStream;
	  var fs$readFile = fs.readFile;
	  fs.readFile = readFile;
	  function readFile (path, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null;

	    return go$readFile(path, options, cb)

	    function go$readFile (path, options, cb, startTime) {
	      return fs$readFile(path, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$readFile, [path, options, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  var fs$writeFile = fs.writeFile;
	  fs.writeFile = writeFile;
	  function writeFile (path, data, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null;

	    return go$writeFile(path, data, options, cb)

	    function go$writeFile (path, data, options, cb, startTime) {
	      return fs$writeFile(path, data, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$writeFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  var fs$appendFile = fs.appendFile;
	  if (fs$appendFile)
	    fs.appendFile = appendFile;
	  function appendFile (path, data, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null;

	    return go$appendFile(path, data, options, cb)

	    function go$appendFile (path, data, options, cb, startTime) {
	      return fs$appendFile(path, data, options, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$appendFile, [path, data, options, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  var fs$copyFile = fs.copyFile;
	  if (fs$copyFile)
	    fs.copyFile = copyFile;
	  function copyFile (src, dest, flags, cb) {
	    if (typeof flags === 'function') {
	      cb = flags;
	      flags = 0;
	    }
	    return go$copyFile(src, dest, flags, cb)

	    function go$copyFile (src, dest, flags, cb, startTime) {
	      return fs$copyFile(src, dest, flags, function (err) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$copyFile, [src, dest, flags, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  var fs$readdir = fs.readdir;
	  fs.readdir = readdir;
	  var noReaddirOptionVersions = /^v[0-5]\./;
	  function readdir (path, options, cb) {
	    if (typeof options === 'function')
	      cb = options, options = null;

	    var go$readdir = noReaddirOptionVersions.test(process.version)
	      ? function go$readdir (path, options, cb, startTime) {
	        return fs$readdir(path, fs$readdirCallback(
	          path, options, cb, startTime
	        ))
	      }
	      : function go$readdir (path, options, cb, startTime) {
	        return fs$readdir(path, options, fs$readdirCallback(
	          path, options, cb, startTime
	        ))
	      };

	    return go$readdir(path, options, cb)

	    function fs$readdirCallback (path, options, cb, startTime) {
	      return function (err, files) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([
	            go$readdir,
	            [path, options, cb],
	            err,
	            startTime || Date.now(),
	            Date.now()
	          ]);
	        else {
	          if (files && files.sort)
	            files.sort();

	          if (typeof cb === 'function')
	            cb.call(this, err, files);
	        }
	      }
	    }
	  }

	  if (process.version.substr(0, 4) === 'v0.8') {
	    var legStreams = legacy(fs);
	    ReadStream = legStreams.ReadStream;
	    WriteStream = legStreams.WriteStream;
	  }

	  var fs$ReadStream = fs.ReadStream;
	  if (fs$ReadStream) {
	    ReadStream.prototype = Object.create(fs$ReadStream.prototype);
	    ReadStream.prototype.open = ReadStream$open;
	  }

	  var fs$WriteStream = fs.WriteStream;
	  if (fs$WriteStream) {
	    WriteStream.prototype = Object.create(fs$WriteStream.prototype);
	    WriteStream.prototype.open = WriteStream$open;
	  }

	  Object.defineProperty(fs, 'ReadStream', {
	    get: function () {
	      return ReadStream
	    },
	    set: function (val) {
	      ReadStream = val;
	    },
	    enumerable: true,
	    configurable: true
	  });
	  Object.defineProperty(fs, 'WriteStream', {
	    get: function () {
	      return WriteStream
	    },
	    set: function (val) {
	      WriteStream = val;
	    },
	    enumerable: true,
	    configurable: true
	  });

	  // legacy names
	  var FileReadStream = ReadStream;
	  Object.defineProperty(fs, 'FileReadStream', {
	    get: function () {
	      return FileReadStream
	    },
	    set: function (val) {
	      FileReadStream = val;
	    },
	    enumerable: true,
	    configurable: true
	  });
	  var FileWriteStream = WriteStream;
	  Object.defineProperty(fs, 'FileWriteStream', {
	    get: function () {
	      return FileWriteStream
	    },
	    set: function (val) {
	      FileWriteStream = val;
	    },
	    enumerable: true,
	    configurable: true
	  });

	  function ReadStream (path, options) {
	    if (this instanceof ReadStream)
	      return fs$ReadStream.apply(this, arguments), this
	    else
	      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
	  }

	  function ReadStream$open () {
	    var that = this;
	    open(that.path, that.flags, that.mode, function (err, fd) {
	      if (err) {
	        if (that.autoClose)
	          that.destroy();

	        that.emit('error', err);
	      } else {
	        that.fd = fd;
	        that.emit('open', fd);
	        that.read();
	      }
	    });
	  }

	  function WriteStream (path, options) {
	    if (this instanceof WriteStream)
	      return fs$WriteStream.apply(this, arguments), this
	    else
	      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
	  }

	  function WriteStream$open () {
	    var that = this;
	    open(that.path, that.flags, that.mode, function (err, fd) {
	      if (err) {
	        that.destroy();
	        that.emit('error', err);
	      } else {
	        that.fd = fd;
	        that.emit('open', fd);
	      }
	    });
	  }

	  function createReadStream (path, options) {
	    return new fs.ReadStream(path, options)
	  }

	  function createWriteStream (path, options) {
	    return new fs.WriteStream(path, options)
	  }

	  var fs$open = fs.open;
	  fs.open = open;
	  function open (path, flags, mode, cb) {
	    if (typeof mode === 'function')
	      cb = mode, mode = null;

	    return go$open(path, flags, mode, cb)

	    function go$open (path, flags, mode, cb, startTime) {
	      return fs$open(path, flags, mode, function (err, fd) {
	        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
	          enqueue([go$open, [path, flags, mode, cb], err, startTime || Date.now(), Date.now()]);
	        else {
	          if (typeof cb === 'function')
	            cb.apply(this, arguments);
	        }
	      })
	    }
	  }

	  return fs
	}

	function enqueue (elem) {
	  debug('ENQUEUE', elem[0].name, elem[1]);
	  fs[gracefulQueue].push(elem);
	  retry();
	}

	// keep track of the timeout between retry() calls
	var retryTimer;

	// reset the startTime and lastTime to now
	// this resets the start of the 60 second overall timeout as well as the
	// delay between attempts so that we'll retry these jobs sooner
	function resetQueue () {
	  var now = Date.now();
	  for (var i = 0; i < fs[gracefulQueue].length; ++i) {
	    // entries that are only a length of 2 are from an older version, don't
	    // bother modifying those since they'll be retried anyway.
	    if (fs[gracefulQueue][i].length > 2) {
	      fs[gracefulQueue][i][3] = now; // startTime
	      fs[gracefulQueue][i][4] = now; // lastTime
	    }
	  }
	  // call retry to make sure we're actively processing the queue
	  retry();
	}

	function retry () {
	  // clear the timer and remove it to help prevent unintended concurrency
	  clearTimeout(retryTimer);
	  retryTimer = undefined;

	  if (fs[gracefulQueue].length === 0)
	    return

	  var elem = fs[gracefulQueue].shift();
	  var fn = elem[0];
	  var args = elem[1];
	  // these items may be unset if they were added by an older graceful-fs
	  var err = elem[2];
	  var startTime = elem[3];
	  var lastTime = elem[4];

	  // if we don't have a startTime we have no way of knowing if we've waited
	  // long enough, so go ahead and retry this item now
	  if (startTime === undefined) {
	    debug('RETRY', fn.name, args);
	    fn.apply(null, args);
	  } else if (Date.now() - startTime >= 60000) {
	    // it's been more than 60 seconds total, bail now
	    debug('TIMEOUT', fn.name, args);
	    var cb = args.pop();
	    if (typeof cb === 'function')
	      cb.call(null, err);
	  } else {
	    // the amount of time between the last attempt and right now
	    var sinceAttempt = Date.now() - lastTime;
	    // the amount of time between when we first tried, and when we last tried
	    // rounded up to at least 1
	    var sinceStart = Math.max(lastTime - startTime, 1);
	    // backoff. wait longer than the total time we've been retrying, but only
	    // up to a maximum of 100ms
	    var desiredDelay = Math.min(sinceStart * 1.2, 100);
	    // it's been long enough since the last retry, do it again
	    if (sinceAttempt >= desiredDelay) {
	      debug('RETRY', fn.name, args);
	      fn.apply(null, args.concat([startTime]));
	    } else {
	      // if we can't do this job yet, push it to the end of the queue
	      // and let the next iteration check again
	      fs[gracefulQueue].push(elem);
	    }
	  }

	  // schedule our next run if one isn't already scheduled
	  if (retryTimer === undefined) {
	    retryTimer = setTimeout(retry, 0);
	  }
	}
	return gracefulFs;
}

var hasRequiredFs;

function requireFs () {
	if (hasRequiredFs) return fs$1;
	hasRequiredFs = 1;
	(function (exports) {
		// This is adapted from https://github.com/normalize/mz
		// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors
		const u = requireUniversalify().fromCallback;
		const fs = requireGracefulFs();

		const api = [
		  'access',
		  'appendFile',
		  'chmod',
		  'chown',
		  'close',
		  'copyFile',
		  'fchmod',
		  'fchown',
		  'fdatasync',
		  'fstat',
		  'fsync',
		  'ftruncate',
		  'futimes',
		  'lchmod',
		  'lchown',
		  'link',
		  'lstat',
		  'mkdir',
		  'mkdtemp',
		  'open',
		  'opendir',
		  'readdir',
		  'readFile',
		  'readlink',
		  'realpath',
		  'rename',
		  'rm',
		  'rmdir',
		  'stat',
		  'symlink',
		  'truncate',
		  'unlink',
		  'utimes',
		  'writeFile'
		].filter(key => {
		  // Some commands are not available on some systems. Ex:
		  // fs.cp was added in Node.js v16.7.0
		  // fs.lchown is not available on at least some Linux
		  return typeof fs[key] === 'function'
		});

		// Export cloned fs:
		Object.assign(exports, fs);

		// Universalify async methods:
		api.forEach(method => {
		  exports[method] = u(fs[method]);
		});

		// We differ from mz/fs in that we still ship the old, broken, fs.exists()
		// since we are a drop-in replacement for the native module
		exports.exists = function (filename, callback) {
		  if (typeof callback === 'function') {
		    return fs.exists(filename, callback)
		  }
		  return new Promise(resolve => {
		    return fs.exists(filename, resolve)
		  })
		};

		// fs.read(), fs.write(), fs.readv(), & fs.writev() need special treatment due to multiple callback args

		exports.read = function (fd, buffer, offset, length, position, callback) {
		  if (typeof callback === 'function') {
		    return fs.read(fd, buffer, offset, length, position, callback)
		  }
		  return new Promise((resolve, reject) => {
		    fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
		      if (err) return reject(err)
		      resolve({ bytesRead, buffer });
		    });
		  })
		};

		// Function signature can be
		// fs.write(fd, buffer[, offset[, length[, position]]], callback)
		// OR
		// fs.write(fd, string[, position[, encoding]], callback)
		// We need to handle both cases, so we use ...args
		exports.write = function (fd, buffer, ...args) {
		  if (typeof args[args.length - 1] === 'function') {
		    return fs.write(fd, buffer, ...args)
		  }

		  return new Promise((resolve, reject) => {
		    fs.write(fd, buffer, ...args, (err, bytesWritten, buffer) => {
		      if (err) return reject(err)
		      resolve({ bytesWritten, buffer });
		    });
		  })
		};

		// Function signature is
		// s.readv(fd, buffers[, position], callback)
		// We need to handle the optional arg, so we use ...args
		exports.readv = function (fd, buffers, ...args) {
		  if (typeof args[args.length - 1] === 'function') {
		    return fs.readv(fd, buffers, ...args)
		  }

		  return new Promise((resolve, reject) => {
		    fs.readv(fd, buffers, ...args, (err, bytesRead, buffers) => {
		      if (err) return reject(err)
		      resolve({ bytesRead, buffers });
		    });
		  })
		};

		// Function signature is
		// s.writev(fd, buffers[, position], callback)
		// We need to handle the optional arg, so we use ...args
		exports.writev = function (fd, buffers, ...args) {
		  if (typeof args[args.length - 1] === 'function') {
		    return fs.writev(fd, buffers, ...args)
		  }

		  return new Promise((resolve, reject) => {
		    fs.writev(fd, buffers, ...args, (err, bytesWritten, buffers) => {
		      if (err) return reject(err)
		      resolve({ bytesWritten, buffers });
		    });
		  })
		};

		// fs.realpath.native sometimes not available if fs is monkey-patched
		if (typeof fs.realpath.native === 'function') {
		  exports.realpath.native = u(fs.realpath.native);
		} else {
		  process.emitWarning(
		    'fs.realpath.native is not a function. Is fs being monkey-patched?',
		    'Warning', 'fs-extra-WARN0003'
		  );
		} 
	} (fs$1));
	return fs$1;
}

var makeDir = {};

var utils$1 = {};

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;
	const path = require$$1$1;

	// https://github.com/nodejs/node/issues/8987
	// https://github.com/libuv/libuv/pull/1088
	utils$1.checkPath = function checkPath (pth) {
	  if (process.platform === 'win32') {
	    const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ''));

	    if (pathHasInvalidWinCharacters) {
	      const error = new Error(`Path contains invalid characters: ${pth}`);
	      error.code = 'EINVAL';
	      throw error
	    }
	  }
	};
	return utils$1;
}

var hasRequiredMakeDir;

function requireMakeDir () {
	if (hasRequiredMakeDir) return makeDir;
	hasRequiredMakeDir = 1;
	const fs = /*@__PURE__*/ requireFs();
	const { checkPath } = /*@__PURE__*/ requireUtils$1();

	const getMode = options => {
	  const defaults = { mode: 0o777 };
	  if (typeof options === 'number') return options
	  return ({ ...defaults, ...options }).mode
	};

	makeDir.makeDir = async (dir, options) => {
	  checkPath(dir);

	  return fs.mkdir(dir, {
	    mode: getMode(options),
	    recursive: true
	  })
	};

	makeDir.makeDirSync = (dir, options) => {
	  checkPath(dir);

	  return fs.mkdirSync(dir, {
	    mode: getMode(options),
	    recursive: true
	  })
	};
	return makeDir;
}

var mkdirs;
var hasRequiredMkdirs;

function requireMkdirs () {
	if (hasRequiredMkdirs) return mkdirs;
	hasRequiredMkdirs = 1;
	const u = requireUniversalify().fromPromise;
	const { makeDir: _makeDir, makeDirSync } = /*@__PURE__*/ requireMakeDir();
	const makeDir = u(_makeDir);

	mkdirs = {
	  mkdirs: makeDir,
	  mkdirsSync: makeDirSync,
	  // alias
	  mkdirp: makeDir,
	  mkdirpSync: makeDirSync,
	  ensureDir: makeDir,
	  ensureDirSync: makeDirSync
	};
	return mkdirs;
}

var pathExists_1;
var hasRequiredPathExists;

function requirePathExists () {
	if (hasRequiredPathExists) return pathExists_1;
	hasRequiredPathExists = 1;
	const u = requireUniversalify().fromPromise;
	const fs = /*@__PURE__*/ requireFs();

	function pathExists (path) {
	  return fs.access(path).then(() => true).catch(() => false)
	}

	pathExists_1 = {
	  pathExists: u(pathExists),
	  pathExistsSync: fs.existsSync
	};
	return pathExists_1;
}

var utimes;
var hasRequiredUtimes;

function requireUtimes () {
	if (hasRequiredUtimes) return utimes;
	hasRequiredUtimes = 1;

	const fs = /*@__PURE__*/ requireFs();
	const u = requireUniversalify().fromPromise;

	async function utimesMillis (path, atime, mtime) {
	  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
	  const fd = await fs.open(path, 'r+');

	  let closeErr = null;

	  try {
	    await fs.futimes(fd, atime, mtime);
	  } finally {
	    try {
	      await fs.close(fd);
	    } catch (e) {
	      closeErr = e;
	    }
	  }

	  if (closeErr) {
	    throw closeErr
	  }
	}

	function utimesMillisSync (path, atime, mtime) {
	  const fd = fs.openSync(path, 'r+');
	  fs.futimesSync(fd, atime, mtime);
	  return fs.closeSync(fd)
	}

	utimes = {
	  utimesMillis: u(utimesMillis),
	  utimesMillisSync
	};
	return utimes;
}

var stat;
var hasRequiredStat;

function requireStat () {
	if (hasRequiredStat) return stat;
	hasRequiredStat = 1;

	const fs = /*@__PURE__*/ requireFs();
	const path = require$$1$1;
	const u = requireUniversalify().fromPromise;

	function getStats (src, dest, opts) {
	  const statFunc = opts.dereference
	    ? (file) => fs.stat(file, { bigint: true })
	    : (file) => fs.lstat(file, { bigint: true });
	  return Promise.all([
	    statFunc(src),
	    statFunc(dest).catch(err => {
	      if (err.code === 'ENOENT') return null
	      throw err
	    })
	  ]).then(([srcStat, destStat]) => ({ srcStat, destStat }))
	}

	function getStatsSync (src, dest, opts) {
	  let destStat;
	  const statFunc = opts.dereference
	    ? (file) => fs.statSync(file, { bigint: true })
	    : (file) => fs.lstatSync(file, { bigint: true });
	  const srcStat = statFunc(src);
	  try {
	    destStat = statFunc(dest);
	  } catch (err) {
	    if (err.code === 'ENOENT') return { srcStat, destStat: null }
	    throw err
	  }
	  return { srcStat, destStat }
	}

	async function checkPaths (src, dest, funcName, opts) {
	  const { srcStat, destStat } = await getStats(src, dest, opts);
	  if (destStat) {
	    if (areIdentical(srcStat, destStat)) {
	      const srcBaseName = path.basename(src);
	      const destBaseName = path.basename(dest);
	      if (funcName === 'move' &&
	        srcBaseName !== destBaseName &&
	        srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
	        return { srcStat, destStat, isChangingCase: true }
	      }
	      throw new Error('Source and destination must not be the same.')
	    }
	    if (srcStat.isDirectory() && !destStat.isDirectory()) {
	      throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
	    }
	    if (!srcStat.isDirectory() && destStat.isDirectory()) {
	      throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`)
	    }
	  }

	  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
	    throw new Error(errMsg(src, dest, funcName))
	  }

	  return { srcStat, destStat }
	}

	function checkPathsSync (src, dest, funcName, opts) {
	  const { srcStat, destStat } = getStatsSync(src, dest, opts);

	  if (destStat) {
	    if (areIdentical(srcStat, destStat)) {
	      const srcBaseName = path.basename(src);
	      const destBaseName = path.basename(dest);
	      if (funcName === 'move' &&
	        srcBaseName !== destBaseName &&
	        srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
	        return { srcStat, destStat, isChangingCase: true }
	      }
	      throw new Error('Source and destination must not be the same.')
	    }
	    if (srcStat.isDirectory() && !destStat.isDirectory()) {
	      throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
	    }
	    if (!srcStat.isDirectory() && destStat.isDirectory()) {
	      throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`)
	    }
	  }

	  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
	    throw new Error(errMsg(src, dest, funcName))
	  }
	  return { srcStat, destStat }
	}

	// recursively check if dest parent is a subdirectory of src.
	// It works for all file types including symlinks since it
	// checks the src and dest inodes. It starts from the deepest
	// parent and stops once it reaches the src parent or the root path.
	async function checkParentPaths (src, srcStat, dest, funcName) {
	  const srcParent = path.resolve(path.dirname(src));
	  const destParent = path.resolve(path.dirname(dest));
	  if (destParent === srcParent || destParent === path.parse(destParent).root) return

	  let destStat;
	  try {
	    destStat = await fs.stat(destParent, { bigint: true });
	  } catch (err) {
	    if (err.code === 'ENOENT') return
	    throw err
	  }

	  if (areIdentical(srcStat, destStat)) {
	    throw new Error(errMsg(src, dest, funcName))
	  }

	  return checkParentPaths(src, srcStat, destParent, funcName)
	}

	function checkParentPathsSync (src, srcStat, dest, funcName) {
	  const srcParent = path.resolve(path.dirname(src));
	  const destParent = path.resolve(path.dirname(dest));
	  if (destParent === srcParent || destParent === path.parse(destParent).root) return
	  let destStat;
	  try {
	    destStat = fs.statSync(destParent, { bigint: true });
	  } catch (err) {
	    if (err.code === 'ENOENT') return
	    throw err
	  }
	  if (areIdentical(srcStat, destStat)) {
	    throw new Error(errMsg(src, dest, funcName))
	  }
	  return checkParentPathsSync(src, srcStat, destParent, funcName)
	}

	function areIdentical (srcStat, destStat) {
	  return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev
	}

	// return true if dest is a subdir of src, otherwise false.
	// It only checks the path strings.
	function isSrcSubdir (src, dest) {
	  const srcArr = path.resolve(src).split(path.sep).filter(i => i);
	  const destArr = path.resolve(dest).split(path.sep).filter(i => i);
	  return srcArr.every((cur, i) => destArr[i] === cur)
	}

	function errMsg (src, dest, funcName) {
	  return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`
	}

	stat = {
	  // checkPaths
	  checkPaths: u(checkPaths),
	  checkPathsSync,
	  // checkParent
	  checkParentPaths: u(checkParentPaths),
	  checkParentPathsSync,
	  // Misc
	  isSrcSubdir,
	  areIdentical
	};
	return stat;
}

var copy_1;
var hasRequiredCopy$1;

function requireCopy$1 () {
	if (hasRequiredCopy$1) return copy_1;
	hasRequiredCopy$1 = 1;

	const fs = /*@__PURE__*/ requireFs();
	const path = require$$1$1;
	const { mkdirs } = /*@__PURE__*/ requireMkdirs();
	const { pathExists } = /*@__PURE__*/ requirePathExists();
	const { utimesMillis } = /*@__PURE__*/ requireUtimes();
	const stat = /*@__PURE__*/ requireStat();

	async function copy (src, dest, opts = {}) {
	  if (typeof opts === 'function') {
	    opts = { filter: opts };
	  }

	  opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now
	  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber

	  // Warn about using preserveTimestamps on 32-bit node
	  if (opts.preserveTimestamps && process.arch === 'ia32') {
	    process.emitWarning(
	      'Using the preserveTimestamps option in 32-bit node is not recommended;\n\n' +
	      '\tsee https://github.com/jprichardson/node-fs-extra/issues/269',
	      'Warning', 'fs-extra-WARN0001'
	    );
	  }

	  const { srcStat, destStat } = await stat.checkPaths(src, dest, 'copy', opts);

	  await stat.checkParentPaths(src, srcStat, dest, 'copy');

	  const include = await runFilter(src, dest, opts);

	  if (!include) return

	  // check if the parent of dest exists, and create it if it doesn't exist
	  const destParent = path.dirname(dest);
	  const dirExists = await pathExists(destParent);
	  if (!dirExists) {
	    await mkdirs(destParent);
	  }

	  await getStatsAndPerformCopy(destStat, src, dest, opts);
	}

	async function runFilter (src, dest, opts) {
	  if (!opts.filter) return true
	  return opts.filter(src, dest)
	}

	async function getStatsAndPerformCopy (destStat, src, dest, opts) {
	  const statFn = opts.dereference ? fs.stat : fs.lstat;
	  const srcStat = await statFn(src);

	  if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts)

	  if (
	    srcStat.isFile() ||
	    srcStat.isCharacterDevice() ||
	    srcStat.isBlockDevice()
	  ) return onFile(srcStat, destStat, src, dest, opts)

	  if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts)
	  if (srcStat.isSocket()) throw new Error(`Cannot copy a socket file: ${src}`)
	  if (srcStat.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${src}`)
	  throw new Error(`Unknown file: ${src}`)
	}

	async function onFile (srcStat, destStat, src, dest, opts) {
	  if (!destStat) return copyFile(srcStat, src, dest, opts)

	  if (opts.overwrite) {
	    await fs.unlink(dest);
	    return copyFile(srcStat, src, dest, opts)
	  }
	  if (opts.errorOnExist) {
	    throw new Error(`'${dest}' already exists`)
	  }
	}

	async function copyFile (srcStat, src, dest, opts) {
	  await fs.copyFile(src, dest);
	  if (opts.preserveTimestamps) {
	    // Make sure the file is writable before setting the timestamp
	    // otherwise open fails with EPERM when invoked with 'r+'
	    // (through utimes call)
	    if (fileIsNotWritable(srcStat.mode)) {
	      await makeFileWritable(dest, srcStat.mode);
	    }

	    // Set timestamps and mode correspondingly

	    // Note that The initial srcStat.atime cannot be trusted
	    // because it is modified by the read(2) system call
	    // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
	    const updatedSrcStat = await fs.stat(src);
	    await utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
	  }

	  return fs.chmod(dest, srcStat.mode)
	}

	function fileIsNotWritable (srcMode) {
	  return (srcMode & 0o200) === 0
	}

	function makeFileWritable (dest, srcMode) {
	  return fs.chmod(dest, srcMode | 0o200)
	}

	async function onDir (srcStat, destStat, src, dest, opts) {
	  // the dest directory might not exist, create it
	  if (!destStat) {
	    await fs.mkdir(dest);
	  }

	  const items = await fs.readdir(src);

	  // loop through the files in the current directory to copy everything
	  await Promise.all(items.map(async item => {
	    const srcItem = path.join(src, item);
	    const destItem = path.join(dest, item);

	    // skip the item if it is matches by the filter function
	    const include = await runFilter(srcItem, destItem, opts);
	    if (!include) return

	    const { destStat } = await stat.checkPaths(srcItem, destItem, 'copy', opts);

	    // If the item is a copyable file, `getStatsAndPerformCopy` will copy it
	    // If the item is a directory, `getStatsAndPerformCopy` will call `onDir` recursively
	    return getStatsAndPerformCopy(destStat, srcItem, destItem, opts)
	  }));

	  if (!destStat) {
	    await fs.chmod(dest, srcStat.mode);
	  }
	}

	async function onLink (destStat, src, dest, opts) {
	  let resolvedSrc = await fs.readlink(src);
	  if (opts.dereference) {
	    resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
	  }
	  if (!destStat) {
	    return fs.symlink(resolvedSrc, dest)
	  }

	  let resolvedDest = null;
	  try {
	    resolvedDest = await fs.readlink(dest);
	  } catch (e) {
	    // dest exists and is a regular file or directory,
	    // Windows may throw UNKNOWN error. If dest already exists,
	    // fs throws error anyway, so no need to guard against it here.
	    if (e.code === 'EINVAL' || e.code === 'UNKNOWN') return fs.symlink(resolvedSrc, dest)
	    throw e
	  }
	  if (opts.dereference) {
	    resolvedDest = path.resolve(process.cwd(), resolvedDest);
	  }
	  if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
	    throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`)
	  }

	  // do not copy if src is a subdir of dest since unlinking
	  // dest in this case would result in removing src contents
	  // and therefore a broken symlink would be created.
	  if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
	    throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`)
	  }

	  // copy the link
	  await fs.unlink(dest);
	  return fs.symlink(resolvedSrc, dest)
	}

	copy_1 = copy;
	return copy_1;
}

var copySync_1;
var hasRequiredCopySync;

function requireCopySync () {
	if (hasRequiredCopySync) return copySync_1;
	hasRequiredCopySync = 1;

	const fs = requireGracefulFs();
	const path = require$$1$1;
	const mkdirsSync = /*@__PURE__*/ requireMkdirs().mkdirsSync;
	const utimesMillisSync = /*@__PURE__*/ requireUtimes().utimesMillisSync;
	const stat = /*@__PURE__*/ requireStat();

	function copySync (src, dest, opts) {
	  if (typeof opts === 'function') {
	    opts = { filter: opts };
	  }

	  opts = opts || {};
	  opts.clobber = 'clobber' in opts ? !!opts.clobber : true; // default to true for now
	  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber; // overwrite falls back to clobber

	  // Warn about using preserveTimestamps on 32-bit node
	  if (opts.preserveTimestamps && process.arch === 'ia32') {
	    process.emitWarning(
	      'Using the preserveTimestamps option in 32-bit node is not recommended;\n\n' +
	      '\tsee https://github.com/jprichardson/node-fs-extra/issues/269',
	      'Warning', 'fs-extra-WARN0002'
	    );
	  }

	  const { srcStat, destStat } = stat.checkPathsSync(src, dest, 'copy', opts);
	  stat.checkParentPathsSync(src, srcStat, dest, 'copy');
	  if (opts.filter && !opts.filter(src, dest)) return
	  const destParent = path.dirname(dest);
	  if (!fs.existsSync(destParent)) mkdirsSync(destParent);
	  return getStats(destStat, src, dest, opts)
	}

	function getStats (destStat, src, dest, opts) {
	  const statSync = opts.dereference ? fs.statSync : fs.lstatSync;
	  const srcStat = statSync(src);

	  if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts)
	  else if (srcStat.isFile() ||
	           srcStat.isCharacterDevice() ||
	           srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts)
	  else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts)
	  else if (srcStat.isSocket()) throw new Error(`Cannot copy a socket file: ${src}`)
	  else if (srcStat.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${src}`)
	  throw new Error(`Unknown file: ${src}`)
	}

	function onFile (srcStat, destStat, src, dest, opts) {
	  if (!destStat) return copyFile(srcStat, src, dest, opts)
	  return mayCopyFile(srcStat, src, dest, opts)
	}

	function mayCopyFile (srcStat, src, dest, opts) {
	  if (opts.overwrite) {
	    fs.unlinkSync(dest);
	    return copyFile(srcStat, src, dest, opts)
	  } else if (opts.errorOnExist) {
	    throw new Error(`'${dest}' already exists`)
	  }
	}

	function copyFile (srcStat, src, dest, opts) {
	  fs.copyFileSync(src, dest);
	  if (opts.preserveTimestamps) handleTimestamps(srcStat.mode, src, dest);
	  return setDestMode(dest, srcStat.mode)
	}

	function handleTimestamps (srcMode, src, dest) {
	  // Make sure the file is writable before setting the timestamp
	  // otherwise open fails with EPERM when invoked with 'r+'
	  // (through utimes call)
	  if (fileIsNotWritable(srcMode)) makeFileWritable(dest, srcMode);
	  return setDestTimestamps(src, dest)
	}

	function fileIsNotWritable (srcMode) {
	  return (srcMode & 0o200) === 0
	}

	function makeFileWritable (dest, srcMode) {
	  return setDestMode(dest, srcMode | 0o200)
	}

	function setDestMode (dest, srcMode) {
	  return fs.chmodSync(dest, srcMode)
	}

	function setDestTimestamps (src, dest) {
	  // The initial srcStat.atime cannot be trusted
	  // because it is modified by the read(2) system call
	  // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
	  const updatedSrcStat = fs.statSync(src);
	  return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime)
	}

	function onDir (srcStat, destStat, src, dest, opts) {
	  if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts)
	  return copyDir(src, dest, opts)
	}

	function mkDirAndCopy (srcMode, src, dest, opts) {
	  fs.mkdirSync(dest);
	  copyDir(src, dest, opts);
	  return setDestMode(dest, srcMode)
	}

	function copyDir (src, dest, opts) {
	  fs.readdirSync(src).forEach(item => copyDirItem(item, src, dest, opts));
	}

	function copyDirItem (item, src, dest, opts) {
	  const srcItem = path.join(src, item);
	  const destItem = path.join(dest, item);
	  if (opts.filter && !opts.filter(srcItem, destItem)) return
	  const { destStat } = stat.checkPathsSync(srcItem, destItem, 'copy', opts);
	  return getStats(destStat, srcItem, destItem, opts)
	}

	function onLink (destStat, src, dest, opts) {
	  let resolvedSrc = fs.readlinkSync(src);
	  if (opts.dereference) {
	    resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
	  }

	  if (!destStat) {
	    return fs.symlinkSync(resolvedSrc, dest)
	  } else {
	    let resolvedDest;
	    try {
	      resolvedDest = fs.readlinkSync(dest);
	    } catch (err) {
	      // dest exists and is a regular file or directory,
	      // Windows may throw UNKNOWN error. If dest already exists,
	      // fs throws error anyway, so no need to guard against it here.
	      if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlinkSync(resolvedSrc, dest)
	      throw err
	    }
	    if (opts.dereference) {
	      resolvedDest = path.resolve(process.cwd(), resolvedDest);
	    }
	    if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
	      throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`)
	    }

	    // prevent copy if src is a subdir of dest since unlinking
	    // dest in this case would result in removing src contents
	    // and therefore a broken symlink would be created.
	    if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
	      throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`)
	    }
	    return copyLink(resolvedSrc, dest)
	  }
	}

	function copyLink (resolvedSrc, dest) {
	  fs.unlinkSync(dest);
	  return fs.symlinkSync(resolvedSrc, dest)
	}

	copySync_1 = copySync;
	return copySync_1;
}

var copy;
var hasRequiredCopy;

function requireCopy () {
	if (hasRequiredCopy) return copy;
	hasRequiredCopy = 1;

	const u = requireUniversalify().fromPromise;
	copy = {
	  copy: u(/*@__PURE__*/ requireCopy$1()),
	  copySync: /*@__PURE__*/ requireCopySync()
	};
	return copy;
}

var remove_1;
var hasRequiredRemove;

function requireRemove () {
	if (hasRequiredRemove) return remove_1;
	hasRequiredRemove = 1;

	const fs = requireGracefulFs();
	const u = requireUniversalify().fromCallback;

	function remove (path, callback) {
	  fs.rm(path, { recursive: true, force: true }, callback);
	}

	function removeSync (path) {
	  fs.rmSync(path, { recursive: true, force: true });
	}

	remove_1 = {
	  remove: u(remove),
	  removeSync
	};
	return remove_1;
}

var empty;
var hasRequiredEmpty;

function requireEmpty () {
	if (hasRequiredEmpty) return empty;
	hasRequiredEmpty = 1;

	const u = requireUniversalify().fromPromise;
	const fs = /*@__PURE__*/ requireFs();
	const path = require$$1$1;
	const mkdir = /*@__PURE__*/ requireMkdirs();
	const remove = /*@__PURE__*/ requireRemove();

	const emptyDir = u(async function emptyDir (dir) {
	  let items;
	  try {
	    items = await fs.readdir(dir);
	  } catch {
	    return mkdir.mkdirs(dir)
	  }

	  return Promise.all(items.map(item => remove.remove(path.join(dir, item))))
	});

	function emptyDirSync (dir) {
	  let items;
	  try {
	    items = fs.readdirSync(dir);
	  } catch {
	    return mkdir.mkdirsSync(dir)
	  }

	  items.forEach(item => {
	    item = path.join(dir, item);
	    remove.removeSync(item);
	  });
	}

	empty = {
	  emptyDirSync,
	  emptydirSync: emptyDirSync,
	  emptyDir,
	  emptydir: emptyDir
	};
	return empty;
}

var file;
var hasRequiredFile;

function requireFile () {
	if (hasRequiredFile) return file;
	hasRequiredFile = 1;

	const u = requireUniversalify().fromPromise;
	const path = require$$1$1;
	const fs = /*@__PURE__*/ requireFs();
	const mkdir = /*@__PURE__*/ requireMkdirs();

	async function createFile (file) {
	  let stats;
	  try {
	    stats = await fs.stat(file);
	  } catch { }
	  if (stats && stats.isFile()) return

	  const dir = path.dirname(file);

	  let dirStats = null;
	  try {
	    dirStats = await fs.stat(dir);
	  } catch (err) {
	    // if the directory doesn't exist, make it
	    if (err.code === 'ENOENT') {
	      await mkdir.mkdirs(dir);
	      await fs.writeFile(file, '');
	      return
	    } else {
	      throw err
	    }
	  }

	  if (dirStats.isDirectory()) {
	    await fs.writeFile(file, '');
	  } else {
	    // parent is not a directory
	    // This is just to cause an internal ENOTDIR error to be thrown
	    await fs.readdir(dir);
	  }
	}

	function createFileSync (file) {
	  let stats;
	  try {
	    stats = fs.statSync(file);
	  } catch { }
	  if (stats && stats.isFile()) return

	  const dir = path.dirname(file);
	  try {
	    if (!fs.statSync(dir).isDirectory()) {
	      // parent is not a directory
	      // This is just to cause an internal ENOTDIR error to be thrown
	      fs.readdirSync(dir);
	    }
	  } catch (err) {
	    // If the stat call above failed because the directory doesn't exist, create it
	    if (err && err.code === 'ENOENT') mkdir.mkdirsSync(dir);
	    else throw err
	  }

	  fs.writeFileSync(file, '');
	}

	file = {
	  createFile: u(createFile),
	  createFileSync
	};
	return file;
}

var link;
var hasRequiredLink;

function requireLink () {
	if (hasRequiredLink) return link;
	hasRequiredLink = 1;

	const u = requireUniversalify().fromPromise;
	const path = require$$1$1;
	const fs = /*@__PURE__*/ requireFs();
	const mkdir = /*@__PURE__*/ requireMkdirs();
	const { pathExists } = /*@__PURE__*/ requirePathExists();
	const { areIdentical } = /*@__PURE__*/ requireStat();

	async function createLink (srcpath, dstpath) {
	  let dstStat;
	  try {
	    dstStat = await fs.lstat(dstpath);
	  } catch {
	    // ignore error
	  }

	  let srcStat;
	  try {
	    srcStat = await fs.lstat(srcpath);
	  } catch (err) {
	    err.message = err.message.replace('lstat', 'ensureLink');
	    throw err
	  }

	  if (dstStat && areIdentical(srcStat, dstStat)) return

	  const dir = path.dirname(dstpath);

	  const dirExists = await pathExists(dir);

	  if (!dirExists) {
	    await mkdir.mkdirs(dir);
	  }

	  await fs.link(srcpath, dstpath);
	}

	function createLinkSync (srcpath, dstpath) {
	  let dstStat;
	  try {
	    dstStat = fs.lstatSync(dstpath);
	  } catch {}

	  try {
	    const srcStat = fs.lstatSync(srcpath);
	    if (dstStat && areIdentical(srcStat, dstStat)) return
	  } catch (err) {
	    err.message = err.message.replace('lstat', 'ensureLink');
	    throw err
	  }

	  const dir = path.dirname(dstpath);
	  const dirExists = fs.existsSync(dir);
	  if (dirExists) return fs.linkSync(srcpath, dstpath)
	  mkdir.mkdirsSync(dir);

	  return fs.linkSync(srcpath, dstpath)
	}

	link = {
	  createLink: u(createLink),
	  createLinkSync
	};
	return link;
}

var symlinkPaths_1;
var hasRequiredSymlinkPaths;

function requireSymlinkPaths () {
	if (hasRequiredSymlinkPaths) return symlinkPaths_1;
	hasRequiredSymlinkPaths = 1;

	const path = require$$1$1;
	const fs = /*@__PURE__*/ requireFs();
	const { pathExists } = /*@__PURE__*/ requirePathExists();

	const u = requireUniversalify().fromPromise;

	/**
	 * Function that returns two types of paths, one relative to symlink, and one
	 * relative to the current working directory. Checks if path is absolute or
	 * relative. If the path is relative, this function checks if the path is
	 * relative to symlink or relative to current working directory. This is an
	 * initiative to find a smarter `srcpath` to supply when building symlinks.
	 * This allows you to determine which path to use out of one of three possible
	 * types of source paths. The first is an absolute path. This is detected by
	 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
	 * see if it exists. If it does it's used, if not an error is returned
	 * (callback)/ thrown (sync). The other two options for `srcpath` are a
	 * relative url. By default Node's `fs.symlink` works by creating a symlink
	 * using `dstpath` and expects the `srcpath` to be relative to the newly
	 * created symlink. If you provide a `srcpath` that does not exist on the file
	 * system it results in a broken symlink. To minimize this, the function
	 * checks to see if the 'relative to symlink' source file exists, and if it
	 * does it will use it. If it does not, it checks if there's a file that
	 * exists that is relative to the current working directory, if does its used.
	 * This preserves the expectations of the original fs.symlink spec and adds
	 * the ability to pass in `relative to current working direcotry` paths.
	 */

	async function symlinkPaths (srcpath, dstpath) {
	  if (path.isAbsolute(srcpath)) {
	    try {
	      await fs.lstat(srcpath);
	    } catch (err) {
	      err.message = err.message.replace('lstat', 'ensureSymlink');
	      throw err
	    }

	    return {
	      toCwd: srcpath,
	      toDst: srcpath
	    }
	  }

	  const dstdir = path.dirname(dstpath);
	  const relativeToDst = path.join(dstdir, srcpath);

	  const exists = await pathExists(relativeToDst);
	  if (exists) {
	    return {
	      toCwd: relativeToDst,
	      toDst: srcpath
	    }
	  }

	  try {
	    await fs.lstat(srcpath);
	  } catch (err) {
	    err.message = err.message.replace('lstat', 'ensureSymlink');
	    throw err
	  }

	  return {
	    toCwd: srcpath,
	    toDst: path.relative(dstdir, srcpath)
	  }
	}

	function symlinkPathsSync (srcpath, dstpath) {
	  if (path.isAbsolute(srcpath)) {
	    const exists = fs.existsSync(srcpath);
	    if (!exists) throw new Error('absolute srcpath does not exist')
	    return {
	      toCwd: srcpath,
	      toDst: srcpath
	    }
	  }

	  const dstdir = path.dirname(dstpath);
	  const relativeToDst = path.join(dstdir, srcpath);
	  const exists = fs.existsSync(relativeToDst);
	  if (exists) {
	    return {
	      toCwd: relativeToDst,
	      toDst: srcpath
	    }
	  }

	  const srcExists = fs.existsSync(srcpath);
	  if (!srcExists) throw new Error('relative srcpath does not exist')
	  return {
	    toCwd: srcpath,
	    toDst: path.relative(dstdir, srcpath)
	  }
	}

	symlinkPaths_1 = {
	  symlinkPaths: u(symlinkPaths),
	  symlinkPathsSync
	};
	return symlinkPaths_1;
}

var symlinkType_1;
var hasRequiredSymlinkType;

function requireSymlinkType () {
	if (hasRequiredSymlinkType) return symlinkType_1;
	hasRequiredSymlinkType = 1;

	const fs = /*@__PURE__*/ requireFs();
	const u = requireUniversalify().fromPromise;

	async function symlinkType (srcpath, type) {
	  if (type) return type

	  let stats;
	  try {
	    stats = await fs.lstat(srcpath);
	  } catch {
	    return 'file'
	  }

	  return (stats && stats.isDirectory()) ? 'dir' : 'file'
	}

	function symlinkTypeSync (srcpath, type) {
	  if (type) return type

	  let stats;
	  try {
	    stats = fs.lstatSync(srcpath);
	  } catch {
	    return 'file'
	  }
	  return (stats && stats.isDirectory()) ? 'dir' : 'file'
	}

	symlinkType_1 = {
	  symlinkType: u(symlinkType),
	  symlinkTypeSync
	};
	return symlinkType_1;
}

var symlink;
var hasRequiredSymlink;

function requireSymlink () {
	if (hasRequiredSymlink) return symlink;
	hasRequiredSymlink = 1;

	const u = requireUniversalify().fromPromise;
	const path = require$$1$1;
	const fs = /*@__PURE__*/ requireFs();

	const { mkdirs, mkdirsSync } = /*@__PURE__*/ requireMkdirs();

	const { symlinkPaths, symlinkPathsSync } = /*@__PURE__*/ requireSymlinkPaths();
	const { symlinkType, symlinkTypeSync } = /*@__PURE__*/ requireSymlinkType();

	const { pathExists } = /*@__PURE__*/ requirePathExists();

	const { areIdentical } = /*@__PURE__*/ requireStat();

	async function createSymlink (srcpath, dstpath, type) {
	  let stats;
	  try {
	    stats = await fs.lstat(dstpath);
	  } catch { }

	  if (stats && stats.isSymbolicLink()) {
	    const [srcStat, dstStat] = await Promise.all([
	      fs.stat(srcpath),
	      fs.stat(dstpath)
	    ]);

	    if (areIdentical(srcStat, dstStat)) return
	  }

	  const relative = await symlinkPaths(srcpath, dstpath);
	  srcpath = relative.toDst;
	  const toType = await symlinkType(relative.toCwd, type);
	  const dir = path.dirname(dstpath);

	  if (!(await pathExists(dir))) {
	    await mkdirs(dir);
	  }

	  return fs.symlink(srcpath, dstpath, toType)
	}

	function createSymlinkSync (srcpath, dstpath, type) {
	  let stats;
	  try {
	    stats = fs.lstatSync(dstpath);
	  } catch { }
	  if (stats && stats.isSymbolicLink()) {
	    const srcStat = fs.statSync(srcpath);
	    const dstStat = fs.statSync(dstpath);
	    if (areIdentical(srcStat, dstStat)) return
	  }

	  const relative = symlinkPathsSync(srcpath, dstpath);
	  srcpath = relative.toDst;
	  type = symlinkTypeSync(relative.toCwd, type);
	  const dir = path.dirname(dstpath);
	  const exists = fs.existsSync(dir);
	  if (exists) return fs.symlinkSync(srcpath, dstpath, type)
	  mkdirsSync(dir);
	  return fs.symlinkSync(srcpath, dstpath, type)
	}

	symlink = {
	  createSymlink: u(createSymlink),
	  createSymlinkSync
	};
	return symlink;
}

var ensure;
var hasRequiredEnsure;

function requireEnsure () {
	if (hasRequiredEnsure) return ensure;
	hasRequiredEnsure = 1;

	const { createFile, createFileSync } = /*@__PURE__*/ requireFile();
	const { createLink, createLinkSync } = /*@__PURE__*/ requireLink();
	const { createSymlink, createSymlinkSync } = /*@__PURE__*/ requireSymlink();

	ensure = {
	  // file
	  createFile,
	  createFileSync,
	  ensureFile: createFile,
	  ensureFileSync: createFileSync,
	  // link
	  createLink,
	  createLinkSync,
	  ensureLink: createLink,
	  ensureLinkSync: createLinkSync,
	  // symlink
	  createSymlink,
	  createSymlinkSync,
	  ensureSymlink: createSymlink,
	  ensureSymlinkSync: createSymlinkSync
	};
	return ensure;
}

var utils;
var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	function stringify (obj, { EOL = '\n', finalEOL = true, replacer = null, spaces } = {}) {
	  const EOF = finalEOL ? EOL : '';
	  const str = JSON.stringify(obj, replacer, spaces);

	  return str.replace(/\n/g, EOL) + EOF
	}

	function stripBom (content) {
	  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
	  if (Buffer.isBuffer(content)) content = content.toString('utf8');
	  return content.replace(/^\uFEFF/, '')
	}

	utils = { stringify, stripBom };
	return utils;
}

var jsonfile_1;
var hasRequiredJsonfile$1;

function requireJsonfile$1 () {
	if (hasRequiredJsonfile$1) return jsonfile_1;
	hasRequiredJsonfile$1 = 1;
	let _fs;
	try {
	  _fs = requireGracefulFs();
	} catch (_) {
	  _fs = require$$0$5;
	}
	const universalify = requireUniversalify();
	const { stringify, stripBom } = requireUtils();

	async function _readFile (file, options = {}) {
	  if (typeof options === 'string') {
	    options = { encoding: options };
	  }

	  const fs = options.fs || _fs;

	  const shouldThrow = 'throws' in options ? options.throws : true;

	  let data = await universalify.fromCallback(fs.readFile)(file, options);

	  data = stripBom(data);

	  let obj;
	  try {
	    obj = JSON.parse(data, options ? options.reviver : null);
	  } catch (err) {
	    if (shouldThrow) {
	      err.message = `${file}: ${err.message}`;
	      throw err
	    } else {
	      return null
	    }
	  }

	  return obj
	}

	const readFile = universalify.fromPromise(_readFile);

	function readFileSync (file, options = {}) {
	  if (typeof options === 'string') {
	    options = { encoding: options };
	  }

	  const fs = options.fs || _fs;

	  const shouldThrow = 'throws' in options ? options.throws : true;

	  try {
	    let content = fs.readFileSync(file, options);
	    content = stripBom(content);
	    return JSON.parse(content, options.reviver)
	  } catch (err) {
	    if (shouldThrow) {
	      err.message = `${file}: ${err.message}`;
	      throw err
	    } else {
	      return null
	    }
	  }
	}

	async function _writeFile (file, obj, options = {}) {
	  const fs = options.fs || _fs;

	  const str = stringify(obj, options);

	  await universalify.fromCallback(fs.writeFile)(file, str, options);
	}

	const writeFile = universalify.fromPromise(_writeFile);

	function writeFileSync (file, obj, options = {}) {
	  const fs = options.fs || _fs;

	  const str = stringify(obj, options);
	  // not sure if fs.writeFileSync returns anything, but just in case
	  return fs.writeFileSync(file, str, options)
	}

	const jsonfile = {
	  readFile,
	  readFileSync,
	  writeFile,
	  writeFileSync
	};

	jsonfile_1 = jsonfile;
	return jsonfile_1;
}

var jsonfile;
var hasRequiredJsonfile;

function requireJsonfile () {
	if (hasRequiredJsonfile) return jsonfile;
	hasRequiredJsonfile = 1;

	const jsonFile = requireJsonfile$1();

	jsonfile = {
	  // jsonfile exports
	  readJson: jsonFile.readFile,
	  readJsonSync: jsonFile.readFileSync,
	  writeJson: jsonFile.writeFile,
	  writeJsonSync: jsonFile.writeFileSync
	};
	return jsonfile;
}

var outputFile_1;
var hasRequiredOutputFile;

function requireOutputFile () {
	if (hasRequiredOutputFile) return outputFile_1;
	hasRequiredOutputFile = 1;

	const u = requireUniversalify().fromPromise;
	const fs = /*@__PURE__*/ requireFs();
	const path = require$$1$1;
	const mkdir = /*@__PURE__*/ requireMkdirs();
	const pathExists = /*@__PURE__*/ requirePathExists().pathExists;

	async function outputFile (file, data, encoding = 'utf-8') {
	  const dir = path.dirname(file);

	  if (!(await pathExists(dir))) {
	    await mkdir.mkdirs(dir);
	  }

	  return fs.writeFile(file, data, encoding)
	}

	function outputFileSync (file, ...args) {
	  const dir = path.dirname(file);
	  if (!fs.existsSync(dir)) {
	    mkdir.mkdirsSync(dir);
	  }

	  fs.writeFileSync(file, ...args);
	}

	outputFile_1 = {
	  outputFile: u(outputFile),
	  outputFileSync
	};
	return outputFile_1;
}

var outputJson_1;
var hasRequiredOutputJson;

function requireOutputJson () {
	if (hasRequiredOutputJson) return outputJson_1;
	hasRequiredOutputJson = 1;

	const { stringify } = requireUtils();
	const { outputFile } = /*@__PURE__*/ requireOutputFile();

	async function outputJson (file, data, options = {}) {
	  const str = stringify(data, options);

	  await outputFile(file, str, options);
	}

	outputJson_1 = outputJson;
	return outputJson_1;
}

var outputJsonSync_1;
var hasRequiredOutputJsonSync;

function requireOutputJsonSync () {
	if (hasRequiredOutputJsonSync) return outputJsonSync_1;
	hasRequiredOutputJsonSync = 1;

	const { stringify } = requireUtils();
	const { outputFileSync } = /*@__PURE__*/ requireOutputFile();

	function outputJsonSync (file, data, options) {
	  const str = stringify(data, options);

	  outputFileSync(file, str, options);
	}

	outputJsonSync_1 = outputJsonSync;
	return outputJsonSync_1;
}

var json;
var hasRequiredJson;

function requireJson () {
	if (hasRequiredJson) return json;
	hasRequiredJson = 1;

	const u = requireUniversalify().fromPromise;
	const jsonFile = /*@__PURE__*/ requireJsonfile();

	jsonFile.outputJson = u(/*@__PURE__*/ requireOutputJson());
	jsonFile.outputJsonSync = /*@__PURE__*/ requireOutputJsonSync();
	// aliases
	jsonFile.outputJSON = jsonFile.outputJson;
	jsonFile.outputJSONSync = jsonFile.outputJsonSync;
	jsonFile.writeJSON = jsonFile.writeJson;
	jsonFile.writeJSONSync = jsonFile.writeJsonSync;
	jsonFile.readJSON = jsonFile.readJson;
	jsonFile.readJSONSync = jsonFile.readJsonSync;

	json = jsonFile;
	return json;
}

var move_1;
var hasRequiredMove$1;

function requireMove$1 () {
	if (hasRequiredMove$1) return move_1;
	hasRequiredMove$1 = 1;

	const fs = /*@__PURE__*/ requireFs();
	const path = require$$1$1;
	const { copy } = /*@__PURE__*/ requireCopy();
	const { remove } = /*@__PURE__*/ requireRemove();
	const { mkdirp } = /*@__PURE__*/ requireMkdirs();
	const { pathExists } = /*@__PURE__*/ requirePathExists();
	const stat = /*@__PURE__*/ requireStat();

	async function move (src, dest, opts = {}) {
	  const overwrite = opts.overwrite || opts.clobber || false;

	  const { srcStat, isChangingCase = false } = await stat.checkPaths(src, dest, 'move', opts);

	  await stat.checkParentPaths(src, srcStat, dest, 'move');

	  // If the parent of dest is not root, make sure it exists before proceeding
	  const destParent = path.dirname(dest);
	  const parsedParentPath = path.parse(destParent);
	  if (parsedParentPath.root !== destParent) {
	    await mkdirp(destParent);
	  }

	  return doRename(src, dest, overwrite, isChangingCase)
	}

	async function doRename (src, dest, overwrite, isChangingCase) {
	  if (!isChangingCase) {
	    if (overwrite) {
	      await remove(dest);
	    } else if (await pathExists(dest)) {
	      throw new Error('dest already exists.')
	    }
	  }

	  try {
	    // Try w/ rename first, and try copy + remove if EXDEV
	    await fs.rename(src, dest);
	  } catch (err) {
	    if (err.code !== 'EXDEV') {
	      throw err
	    }
	    await moveAcrossDevice(src, dest, overwrite);
	  }
	}

	async function moveAcrossDevice (src, dest, overwrite) {
	  const opts = {
	    overwrite,
	    errorOnExist: true,
	    preserveTimestamps: true
	  };

	  await copy(src, dest, opts);
	  return remove(src)
	}

	move_1 = move;
	return move_1;
}

var moveSync_1;
var hasRequiredMoveSync;

function requireMoveSync () {
	if (hasRequiredMoveSync) return moveSync_1;
	hasRequiredMoveSync = 1;

	const fs = requireGracefulFs();
	const path = require$$1$1;
	const copySync = /*@__PURE__*/ requireCopy().copySync;
	const removeSync = /*@__PURE__*/ requireRemove().removeSync;
	const mkdirpSync = /*@__PURE__*/ requireMkdirs().mkdirpSync;
	const stat = /*@__PURE__*/ requireStat();

	function moveSync (src, dest, opts) {
	  opts = opts || {};
	  const overwrite = opts.overwrite || opts.clobber || false;

	  const { srcStat, isChangingCase = false } = stat.checkPathsSync(src, dest, 'move', opts);
	  stat.checkParentPathsSync(src, srcStat, dest, 'move');
	  if (!isParentRoot(dest)) mkdirpSync(path.dirname(dest));
	  return doRename(src, dest, overwrite, isChangingCase)
	}

	function isParentRoot (dest) {
	  const parent = path.dirname(dest);
	  const parsedPath = path.parse(parent);
	  return parsedPath.root === parent
	}

	function doRename (src, dest, overwrite, isChangingCase) {
	  if (isChangingCase) return rename(src, dest, overwrite)
	  if (overwrite) {
	    removeSync(dest);
	    return rename(src, dest, overwrite)
	  }
	  if (fs.existsSync(dest)) throw new Error('dest already exists.')
	  return rename(src, dest, overwrite)
	}

	function rename (src, dest, overwrite) {
	  try {
	    fs.renameSync(src, dest);
	  } catch (err) {
	    if (err.code !== 'EXDEV') throw err
	    return moveAcrossDevice(src, dest, overwrite)
	  }
	}

	function moveAcrossDevice (src, dest, overwrite) {
	  const opts = {
	    overwrite,
	    errorOnExist: true,
	    preserveTimestamps: true
	  };
	  copySync(src, dest, opts);
	  return removeSync(src)
	}

	moveSync_1 = moveSync;
	return moveSync_1;
}

var move;
var hasRequiredMove;

function requireMove () {
	if (hasRequiredMove) return move;
	hasRequiredMove = 1;

	const u = requireUniversalify().fromPromise;
	move = {
	  move: u(/*@__PURE__*/ requireMove$1()),
	  moveSync: /*@__PURE__*/ requireMoveSync()
	};
	return move;
}

var lib;
var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;

	lib = {
	  // Export promiseified graceful-fs:
	  .../*@__PURE__*/ requireFs(),
	  // Export extra methods:
	  .../*@__PURE__*/ requireCopy(),
	  .../*@__PURE__*/ requireEmpty(),
	  .../*@__PURE__*/ requireEnsure(),
	  .../*@__PURE__*/ requireJson(),
	  .../*@__PURE__*/ requireMkdirs(),
	  .../*@__PURE__*/ requireMove(),
	  .../*@__PURE__*/ requireOutputFile(),
	  .../*@__PURE__*/ requirePathExists(),
	  .../*@__PURE__*/ requireRemove()
	};
	return lib;
}

var libExports = /*@__PURE__*/ requireLib();
var fs = /*@__PURE__*/getDefaultExportFromCjs(libExports);

// 导入相关模块和库

/// 定义创建新文件夹以及对应文件的逻辑
const createNewFolder = (folderName) => {
  const targetFolderPath = require$$1$1.join('packages', 'ui', 'components', folderName);
  // 创建文件夹
  fs.mkdirpSync(targetFolderPath);
  // 创建src文件夹
  const srcFolderPath = require$$1$1.join(targetFolderPath, 'src');
  fs.mkdirpSync(srcFolderPath);
  // 创建type文件夹
  const typeFolderPath = require$$1$1.join(targetFolderPath, 'type');
  fs.mkdirpSync(typeFolderPath);

  // 创建test文件夹
  const testFolderPath = require$$1$1.join(targetFolderPath, 'test');
  fs.mkdirpSync(testFolderPath);

  // 创建style文件夹
  const styleFolderPath = require$$1$1.join(targetFolderPath, 'style');
  fs.mkdirpSync(styleFolderPath);

  // 创建index.ts文件并写入内容
  const indexTsPath = require$$1$1.join(targetFolderPath, 'index.ts');
  const indexTsContent = `import { withInstall } from '../../utils/withinstall';
        import ${folderName} from './src/index.vue';

        const V${folderName} = withInstall(${folderName});

        export default V${folderName};`;
  fs.writeFileSync(indexTsPath, indexTsContent);

  // 在src文件夹下创建index.vue文件，并写入简单示例内容（这里可按需调整具体内容）
  const indexVuePath = require$$1$1.join(srcFolderPath, 'index.vue');
  const indexVueContent = `
    <template>
        <div>${folderName}组件内容占位</div>
    </template>

    <script setup lang="ts"></script>`;

  fs.writeFileSync(indexVuePath, indexVueContent);

  console.log(
    colors.green(`已成功创建名为${folderName}的文件夹及相关文件内容。`),
  );
};

// 定义主函数，在命令行执行脚本时会运行这个函数
function main() {
  const program = new Command();
  // 定义 --help 命令对应的帮助信息
  program.name('v').description('Versakit命令行工具').version('0.2.0');

  // 定义创建新文件夹对应的命令
  program
    .command('new')
    .description('创建一个新文件夹')
    .argument('<folderName>', '要创建的文件夹名称') // 明确指定需要接收的参数以及其描述
    .action((folderName) => {
      createNewFolder(folderName);
    })
    .addHelpText('after', '\n注意：文件夹名称只能包含字母、数字和下划线。');

  program.parse(process.argv);
}

// 判断是否是直接运行该脚本，如果是则执行主函数
main();
//# sourceMappingURL=index.cjs.map
