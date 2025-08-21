from manim import *

# Portrait mode configuration
config.pixel_height = 1920
config.pixel_width = 1080
config.frame_height = 14.0
config.frame_width = 8.0

class PythagoreanTheorem(Scene):
    def construct(self):
        # Define the vertices of the upside-down triangle
        A = [0, 0, 0]
        B = [-4, 0, 0]
        C = [-4, -3, 0]
        
        # Create the triangle and set its color to purple
        triangle = Polygon(A, B, C, color=PURPLE, fill_opacity=0.5).move_to(UP * 2)
        
        # Labels for the sides (interchanged opposite and adjacent)
        hyp_label = MathTex(r"c \cdot t_1").next_to(triangle.get_edge_center(DOWN), LEFT, buff=0.5)
        adj_label = MathTex(r"v \cdot t_1").next_to(triangle.get_edge_center(LEFT), LEFT, buff=0.5)
        opp_label = MathTex(r"c \cdot t").next_to(triangle.get_edge_center(RIGHT), RIGHT, buff=0.5)
        
        # Steps to derive the time dilation equation
        step1 = MathTex(r"(c \cdot t_1)^2 = (c \cdot t)^2 + (v \cdot t_1)^2").next_to(triangle, DOWN, buff=1)
        step2 = MathTex(r"c^2 \cdot t_1^2 = c^2 \cdot t^2 + v^2 \cdot t_1^2").next_to(step1, DOWN, buff=0.3)
        step3 = MathTex(r"c^2 \cdot t_1^2 - v^2 \cdot t_1^2 = c^2 \cdot t^2").next_to(step2, DOWN, buff=0.3)
        step4 = MathTex(r"t_1^2 \cdot (c^2 - v^2) = c^2 \cdot t^2").next_to(step3, DOWN, buff=0.3)
        time_dilation_eq = MathTex(r"t_1 = \frac{t}{\sqrt{1 - \left(\frac{v}{c}\right)^2}}").next_to(step4, DOWN, buff=1)

        # Animate the scene
        self.play(Create(triangle))
        self.play(Write(hyp_label))
        self.play(Write(adj_label))
        self.play(Write(opp_label))
        self.play(Write(step1))
        self.wait(1)
        self.play(Write(step2))
        self.wait(1)
        self.play(Write(step3))
        self.wait(1)
        self.play(Write(step4))
        self.wait(1)
        self.play(Write(time_dilation_eq))
        self.wait(2)

# To run this script, save it in a file and run it using Manim:
# manim -pql script_name.py PythagoreanTheorem -o "F:\\Manim Animations"
