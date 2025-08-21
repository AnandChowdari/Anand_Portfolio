from manim import *

class Simple3DScene(ThreeDScene):
    def construct(self):
        # Create a 3D cube
        cube = Sphere()

        # Set the color of the cube
        cube.set_color(BLUE)

        # Display the cube
        self.play(Create(cube))

        # Rotate the cube on its axis
        self.play(Rotate(cube, angle=TAU, axis=UP, run_time=3))

        # Wait for 1 second
        self.wait(1)
