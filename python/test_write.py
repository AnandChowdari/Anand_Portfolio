import os

output_directory = "F:\\Manim Animations"
test_file_path = os.path.join(output_directory, "test.txt")

with open(test_file_path, "w") as f:
    f.write("Test")
