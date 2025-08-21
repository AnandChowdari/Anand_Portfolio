from manim import *

class ChainReaction(Scene):
    def construct(self):
        # Initial nucleus
        nucleus = Dot(point=ORIGIN, radius=0.2, color=BLUE_E)
        neutron = Dot(point=LEFT * 4, radius=0.1, color=YELLOW)

        neutron_path = Line(neutron.get_center(), nucleus.get_center(), color=WHITE)
        neutron_movement = MoveAlongPath(neutron, neutron_path, rate_func=linear)

        self.add(nucleus, neutron)
        self.play(neutron_movement, run_time=1.5)

        # Split nucleus into two
        nucleus1 = Dot(point=ORIGIN + UP * 0.5, radius=0.15, color=BLUE)
        nucleus2 = Dot(point=ORIGIN + DOWN * 0.5, radius=0.15, color=BLUE)
        neutron1 = Dot(point=ORIGIN + RIGHT * 0.3 + UP * 0.5, radius=0.08, color=YELLOW)
        neutron2 = Dot(point=ORIGIN + RIGHT * 0.3, radius=0.08, color=YELLOW)
        neutron3 = Dot(point=ORIGIN + RIGHT * 0.3 + DOWN * 0.5, radius=0.08, color=YELLOW)

        self.play(
            FadeOut(nucleus),
            FadeIn(nucleus1),
            FadeIn(nucleus2),
            FadeIn(neutron1),
            FadeIn(neutron2),
            FadeIn(neutron3),
            run_time=1
        )

        # Animate emitted neutrons flying off
        self.play(
            neutron1.animate.shift(RIGHT * 3 + UP * 1),
            neutron2.animate.shift(RIGHT * 3),
            neutron3.animate.shift(RIGHT * 3 + DOWN * 1),
            run_time=1.2
        )

        # Optional: duplicate reaction on one neutron hitting again
        new_nucleus = Dot(point=RIGHT * 3 + UP * 1, radius=0.2, color=BLUE_E)
        self.play(FadeIn(new_nucleus), run_time=0.3)

        # Pause and end
        self.wait(1.5)
