from manim import *

# Set 60 FPS
config.frame_rate = 60

# Portrait mode configuration
config.pixel_height = 1920
config.pixel_width = 1080
config.frame_height = 14.0
config.frame_width = 8.0

class TriangleLabels(Scene):
    def construct(self):
        # Define the vertices of the right triangle
        A = [0, 0, 0]       # Right-angle vertex
        B = [-4, 0, 0]      # Adjacent side vertex
        C = [-4, -3, 0]     # Opposite side vertex
        
        # Create the triangle
        triangle = Polygon(A, B, C, color=PURPLE, fill_opacity=0.5).move_to(UP * 2)

        # Labels for the sides
        hyp_label = MathTex(r"c \cdot t_1").move_to(triangle.get_center() + RIGHT * 1.5 + DOWN * 0.5)
        adj_label = MathTex(r"c \cdot t").move_to(triangle.get_edge_center(LEFT) + LEFT * 0.5)
        opp_label = MathTex(r"v \cdot t_1").move_to(triangle.get_edge_center(UP) + DOWN * 0.5)

        # Animate the scene
        self.play(Create(triangle)) 
        self.play(Write(hyp_label))
        self.play(Write(adj_label))
        self.play(Write(opp_label))
        self.wait(2)
