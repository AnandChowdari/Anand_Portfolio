from fpdf import FPDF

# Initialize PDF
pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Arial", size=12)

# Add title
pdf.set_font("Arial", style="B", size=14)
pdf.cell(200, 10, txt="CHEMISTRY ONE MARK", ln=True, align="C")
pdf.ln(10)

# Add content
content = """
Here are the one-mark answers based on the questions provided:  

1. **Calculate the bond order of O2:**  
   Bond order = 2 (O2 has 2 bonds formed from shared electrons).  

2. **Differentiate between primary and secondary batteries:**  
   Primary batteries are non-rechargeable; secondary batteries are rechargeable.  

3. **Discuss the principle of potentiometric sensors:**  
   Potentiometric sensors measure the potential difference between a working electrode and a reference electrode without current flow.  

4. **Why can't Bakelite be remoulded?**  
   Bakelite is a thermosetting polymer that forms cross-linked structures upon curing, making it impossible to remould.  

5. **What is meant by step-growth polymerization?**  
   It is a type of polymerization where bi-functional or multi-functional monomers react to form a polymer in a stepwise manner.  

6. **List the components used in UV-VIS spectrophotometer:**  
   Light source, monochromator, sample holder, detector, and readout device.  

7. **What are the various possible vibration modes in IR spectroscopy?**  
   Stretching (symmetric and asymmetric) and bending (scissoring, rocking, wagging, and twisting).  

8. **Write the conditions for linear combination of atomic orbitals:**  
   (i) Orbitals must have similar energies. (ii) Proper overlap must occur.  

9. **Determine the electrode potential of zinc electrode immersed in 0.1 M ZnSO₄ solution at 25°C (\(E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.763\) V):**  
   Use the Nernst equation:  
   \[
   E = E^\circ - \frac{0.0591}{2} \log [\text{Zn}^{2+}] = -0.763 - \frac{0.0591}{2} \log(0.1)
   \]  
   Answer: \(E = -0.79 \, \text{V}\).  

10. **Why do electrochemical cells stop working after some time?**  
    Concentrations of reactants and products become equal, causing \(Q = K\) and \(E_{\text{cell}} = 0\).  

11. **Define functionality. What is the functionality of olefins?**  
    Functionality is the number of reactive sites in a molecule. Olefins have functionality = 2 due to their double bond.  

12. **Write the synthesis of polylactic acid:**  
    Lactic acid undergoes condensation polymerization to form polylactic acid (PLA).  

13. **Why are absorption bands of UV-VIS spectra very broad?**  
    Due to electronic transitions coupled with vibrational and rotational transitions.  

14. **What is the basic principle of chromatography?**  
    Separation based on differential distribution of components between a stationary phase and a mobile phase.  

15. **Define alkalinity of water:**  
    Alkalinity is the capacity of water to neutralize acids, mainly due to bicarbonates, carbonates, and hydroxides.  

16. **Give the reason for priming in boilers:**  
    Priming occurs due to rapid steam formation carrying water droplets.  

17. **Why is breakpoint chlorination important?**  
    It ensures complete disinfection and removal of combined chlorine compounds.  

18. **Name two disinfectants used in water treatment:**  
    Chlorine and ozone.  

19. **Write any two applications of Nernst’s equation:**  
    (i) To calculate cell potential at non-standard conditions. (ii) To determine equilibrium constant.  

20. **Why is Bakelite used in electrical appliances?**  
    Bakelite is a good insulator, heat-resistant, and durable.  


21. **What are biodegradable polymers? Give examples:**\
    Polymers that degrade into natural substances like water and carbon dioxide by microbial action.\
    Example: Polylactic acid (PLA), Polyhydroxybutyrate (PHB).

22. **What are the ions responsible for permanent hardness in water?**\
    Calcium (\( \text{Ca}^{2+} \)) and magnesium (\( \text{Mg}^{2+} \)) ions, in the form of chlorides and sulfates.

23. **Differentiate between scale and sludge:**\
    Scale: Hard deposits on boiler surfaces.\
    Sludge: Soft, loose precipitates that settle at the bottom.

24. **Write the principle of the reverse osmosis method:**\
    Solvent moves from a region of higher solute concentration to lower solute concentration by applying external pressure greater than osmotic pressure.

25. **What is electrode potential?**\
    The potential difference developed between a metal electrode and its solution due to oxidation or reduction reactions.

26. **State the mathematical form of Nernst’s equation:**\
    \[
    E = E^\circ - \frac{0.0591}{n} \log Q
    \]

27. **Write the preparation of PVC with reaction:**\
    PVC is prepared by the polymerization of vinyl chloride (\( \text{CH}_2=\text{CHCl} \)).\
    \[
    n\text{CH}_2=\text{CHCl} \rightarrow (\text{CH}_2-\text{CHCl})_n
    \]

28. **What are biodegradable polymers? Give examples:**\
    Polymers that decompose naturally. Examples: Polyglycolic acid (PGA), Polylactic acid (PLA).

29. **A water sample consists of 7.5 mg of \( \text{Mg(HCO}_3)_2 \) per liter. Calculate the hardness in terms of \( \text{CaCO}_3 \):**\
    \[
    \text{Hardness} = \frac{\text{Mg(HCO}_3)_2 \times \text{equivalent weight of CaCO}_3}{\text{molecular weight of Mg(HCO}_3)_2}
    \]\
    Answer: 5.136 mg/L.

30. **Predict the magnetic behavior and bond order of CO molecule:**\
    Magnetic behavior: Diamagnetic.\
    Bond order = 3.

31. **How are bonding and antibonding molecular orbitals formed?**\
    Bonding orbitals form from constructive interference of atomic orbitals.\
    Antibonding orbitals form from destructive interference of atomic orbitals.

32. **Calculate the equilibrium constant of a Daniel cell at 25°C (\( E^\circ = 1.1 \ \text{V} \)):**\
    Using \( E^\circ = \frac{0.0591}{n} \log K \):\
    \[
    K = 10^{\frac{nE^\circ}{0.0591}} = 10^{\frac{2 \times 1.1}{0.0591}}
    \]\
    Answer: \( K \approx 1.6 \times 10^{37} \).

33. **List out the components used in a lithium-ion battery and any two applications:**\
    Components: Anode (graphite), cathode (lithium metal oxide), electrolyte (lithium salt solution), separator.\
    Applications: Smartphones, electric vehicles.

34. **Write the repeating unit of Nylon 6,6:**\
    \[
    -[\text{NH}-(\text{CH}_2)_6-\text{NHCO}-(\text{CH}_2)_4-\text{CO}]-
    \]

35. **What are the substances used for p-doping and n-doping of conducting polymers?**\
    p-doping: Bromine, iodine.\
    n-doping: Sodium, potassium.

36. **Give the regions of the electromagnetic spectrum in the order of increasing wavelength:**\
    Gamma rays < X-rays < UV < Visible < Infrared < Microwaves < Radio waves.

37. **List the components of HPLC:**\
    Solvent reservoir, pump, injector, column, detector, and data processor.

38. **Mention the condition for a molecule to be IR active:**\
    The molecule must have a changing dipole moment during vibration.

39. **Define chromophore. Give an example:**\
    A chromophore is a part of a molecule responsible for light absorption.\
    Example: \( \text{C=C} \) in alkenes.

40. **What are auxochromes? Give an example:**\
    Auxochromes are groups that enhance the absorption of chromophores.\
    Example: \( \text{\u2013OH} \), \( \text{\u2013NH}_2 \).

41. **State Beer-Lambert’s law and write any two limitations of it:**\
    Law: \( A = \epsilon c l \).\
    Limitations: Applies only to dilute solutions and monochromatic light.

42. **Define tacticity. Give an example:**\
    Tacticity refers to the arrangement of side groups in a polymer chain.\
    Example: Isotactic polypropylene.

43. **Write any two applications of carbon fibers:**\
    Aerospace structures, sports equipment.

44. **Give the reaction for the preparation of Buna-S:**\
    \[
    n\text{CH}_2=\text{CHCH}=\text{CH}_2 + n\text{C}_6\text{H}_6 \rightarrow (\text{CH}_2-\text{CHCH}_2-\text{C}_6\text{H}_5)_n
    \]

45. **What is a bathochromic shift? Give an example:**\
    A shift of the absorption maximum to longer wavelengths.\
    Example: \( \text{Benzene} \rightarrow \text{Aniline} \).

46. **Write any two applications of UV-VIS spectroscopy:**\
    (i) Determination of electronic transitions.\
    (ii) Concentration analysis of solutions.

47. **Write any two applications of IR spectroscopy:**\
    (i) Functional group identification.\
    (ii) Study of molecular vibrations.

48. **Calculate possible vibrations in \( \text{H}_2\text{O} \) and \( \text{CO}_2 \):**\
    \[
    \text{H}_2\text{O}: 3N-6 = 3(3)-6 = 3 \quad \text{CO}_2: 3N-5 = 3(3)-5 = 4
    \]

49. **Define degree of polymerization:**\
    The number of monomer units in a polymer chain.

50. **What are the components used in a Zn-air battery?**\
    Zinc anode, air cathode, and an electrolyte (aqueous potassium hydroxide).

"""

for line in content.split("\n"):
    pdf.set_font("Arial", size=12)
    pdf.multi_cell(0, 10, line)

# Save the PDF
pdf_output_path = "CHEMISTRY_ONE_MARK.pdf"
pdf.output("F:\\Documents\\onemark_che.pdf")


print(f"PDF saved to: {pdf_output_path}")
