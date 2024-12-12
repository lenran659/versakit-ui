import os

def list_all_files_in_folder(folder_path):
    file_list = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_list.append(os.path.join(root, file))
    return file_list


def extract_filename(file_path):
    return os.path.splitext(os.path.basename(file_path))[0]

icon_folder_path = "./packages/ui/icons"
all_files = list_all_files_in_folder(icon_folder_path)
filename_list = []

for file in all_files:
    filename = extract_filename(file)
    filename_list.append(filename)

print(filename_list)
