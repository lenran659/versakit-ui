import type { Directive } from 'vue'

export const vRipple: Directive<
  HTMLElement,
  {
    duration?: number
    color?: string
  }
> = {
  mounted(el, binding) {
    const { position, overflow } = getComputedStyle(el)
    if (position == 'static') {
      el.style.position = 'relative'
    }
    if (overflow !== 'hidden') {
      el.style.overflow = 'hidden'
    }

    el.addEventListener('click', function doRipple(ev: MouseEvent) {
      const span = document.createElement('span')
      const size = Math.max(el.offsetWidth, el.offsetHeight) * 2
      const duration = (binding.value?.duration ?? 500) / 1000
      const backgroundColor = binding.value?.color ?? 'rgba(0, 0, 0, .15)'
      const { x, y } = el.getBoundingClientRect()
      const { clientX, clientY } = ev

      span.style.width = size + 'px'
      span.style.height = size + 'px'
      span.style.position = 'absolute'
      span.style.backgroundColor = backgroundColor
      span.style.top = clientY - y - size / 2 + 'px'
      span.style.left = clientX - x - size / 2 + 'px'
      span.style.transform = 'scale(0)'
      span.style.transition = `transform ${duration}s ease-in, opacity ${duration}s ease-in`
      span.style.borderRadius = '50%'
      span.style.pointerEvents = 'none'

      el.appendChild(span)

      span.addEventListener('transitionend', function () {
        span.parentElement?.removeChild(this)
      })

      requestAnimationFrame(() => {
        span.style.transform = 'scale(1)'
        span.style.opacity = '0'
      })
    })
  },
}
