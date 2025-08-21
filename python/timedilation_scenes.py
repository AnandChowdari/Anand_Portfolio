from manim import *

class RestFrame(Scene):
    def construct(self):
        # Define colors
        photon_color = PURPLE  # Premium violet color
        plate_color = ORANGE   # Complementary color to violet
        
        # Create plates
        plate_top = Rectangle(width=3, height=0.2, color=plate_color).move_to(UP * 2)
        plate_bottom = Rectangle(width=3, height=0.2, color=plate_color).move_to(DOWN * 2)
        
        # Create photon (ball)
        photon = Dot(color=photon_color).move_to(plate_bottom.get_center())

        # Add objects to scene
        self.add(plate_top, plate_bottom, photon)

        # Animate photon bouncing up and down
        for _ in range(5):  # 5 bounces
            self.play(photon.animate.move_to(plate_top.get_center()), run_time=0.5)
            self.play(photon.animate.move_to(plate_bottom.get_center()), run_time=0.5)

class MovingFrame(Scene):
    def construct(self):
        # Define colors
        photon_color = PURPLE  # Premium violet color
        plate_color = ORANGE   # Complementary color to violet
        
        # Create plates
        plate_top = Rectangle(width=3, height=0.2, color=plate_color).move_to(UP * 2)
        plate_bottom = Rectangle(width=3, height=0.2, color=plate_color).move_to(DOWN * 2)
        
        # Create photon (ball)
        photon = Dot(color=photon_color).move_to(plate_bottom.get_center())

        # Add objects to scene
        self.add(plate_top, plate_bottom, photon)

        # Velocity of frame
        v_vector = 2 * RIGHT  # Moving to the right

        # Animate photon in moving frame (diagonal motion)
        for _ in range(5):  # 5 bounces
            self.play(
                photon.animate.move_to(plate_top.get_center() + v_vector), run_time=0.7
            )
            self.play(
                photon.animate.move_to(plate_bottom.get_center() + 2 * v_vector), run_time=0.7
            )
