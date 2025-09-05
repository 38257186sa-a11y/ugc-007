/* script.js
   Single-file: 150 advanced Political Science MCQs (2015-based, upgraded)
   + 50 advanced UGC NET Paper-1 style MCQs
   Renders accessible accordions, option-click checking, timer and mobile menu toggle.
   Answer indices are 0-based.
*/

/* ===================== MCQ BANK: 150 Political Science ===================== */
/* (Adapted/advanced; ensure this single-file approach) */
const mcqs2015 = [
  { id: 1, question: "Who is conventionally referred to as the 'father of Political Science' because of his systematic treatment of constitutions in 'Politics'?", options: ["Plato","Aristotle","Machiavelli","Socrates"], answer: 1, explanation: "Aristotle (384–322 BCE) analyses constitutions comparatively in Politics; his empirical and classificatory method established political inquiry as a systematic discipline." },
  { id: 2, question: "Which conception of 'liberty' emphasises absence of external constraints and is central to negative-rights traditions?", options: ["Positive liberty","Negative liberty","Republican liberty","Participatory liberty"], answer: 1, explanation: "Isaiah Berlin's notion of negative liberty denotes freedom from interference—absence of constraints on action by others." },
  { id: 3, question: "Rousseau's 'general will' (volonté générale) is best normatively characterised as:", options: ["Sum of private preferences","Collective will oriented to common good","Majority will as aggregate preferences","Sovereign's decree"], answer: 1, explanation: "Rousseau distinguishes general will from particular wills; it expresses the common good and legitimates political authority when aimed at public interest." },
  { id: 4, question: "Which theorist defined the state as the organisation claiming a monopoly on the legitimate use of physical force within a territory?", options: ["Jean Bodin","Max Weber","Thomas Hobbes","John Austin"], answer: 1, explanation: "Max Weber's classic definition emphasises the state's claim to legitimate monopoly of physical coercion as a defining feature." },
  { id: 5, question: "In Marxist theory, the phrase 'the state will wither away' refers to which stage?", options: ["Feudal society","Socialist society (transition)","Communist society","Capitalist society"], answer: 2, explanation: "Marx envisaged that in the mature communist phase — after class antagonisms dissolve — the coercive apparatus of the state becomes unnecessary and 'withers away'." },
  { id: 6, question: "Rawls' 'veil of ignorance' is a device used in:", options: ["Historical materialism","Deliberative bargaining","Original position for choosing principles of justice","Utilitarian aggregation"], answer: 2, explanation: "The veil of ignorance removes knowledge of one's social position in Rawls' original position to secure impartial principles of justice." },
  { id: 7, question: "Which thinker warned of the 'iron cage' produced by bureaucratic rationalisation?", options: ["Max Weber","Émile Durkheim","Robert Michels","Gaetano Mosca"], answer: 0, explanation: "Weber described bureaucratic rationalisation as constraining individual freedom through impersonal rules—an 'iron cage' of rationalisation." },
  { id: 8, question: "Gramsci's concept of 'hegemony' primarily refers to:", options: ["Pure economic coercion","Cultural-ideological consent and leadership","Legal authority only","Bureaucratic dominance"], answer: 1, explanation: "For Gramsci, hegemony is the cultural and ideological leadership that secures consent to a social order through civil society institutions." },
  { id: 9, question: "Who contrasted 'ancient' and 'modern' liberty in 1819?", options: ["Benjamin Constant","Alexis de Tocqueville","Isaiah Berlin","John Stuart Mill"], answer: 0, explanation: "Benjamin Constant's lecture contrasted participatory ancient liberty with modern individual rights and protections from state interference." },
  { id: 10, question: "Thoreau's contribution to political thought is best summarised as:", options: ["Advocacy for state power","Systematic justification of civil disobedience for unjust laws","Legal positivism","Instrumental republicanism"], answer: 1, explanation: "Thoreau's 'Civil Disobedience' argues moral duty can require non-violent refusal of unjust laws, influencing later activists." },
  { id: 11, question: "Nozick's entitlement theory primarily argues:", options: ["Redistribution by pattern is just","Justice depends on historical entitlement and a minimal state","Rawlsian difference principle is right","State should provide full welfare"], answer: 1, explanation: "Nozick defends holdings derived from just acquisition and transfers; patterned redistribution conflicts with entitlements." },
  { id: 12, question: "The 'Iron Law of Oligarchy' was formulated by:", options: ["Vilfredo Pareto","Gaetano Mosca","Robert Michels","C. Wright Mills"], answer: 2, explanation: "Michels argued that organisational complexity and leadership specialisation lead to oligarchic rule even in democratic organisations." },
  { id: 13, question: "Which approach in comparative politics foregrounds formal rules and institutional constraints?", options: ["Political culture approach","Marxist structuralism","Institutionalism","Behaviouralism"], answer: 2, explanation: "Institutionalism focuses on how formal/informal rules and organisations shape actors' incentives and outcomes." },
  { id: 14, question: "Almond and Verba define political culture as:", options: ["Economic distribution","Media flows","Attitudes, beliefs and sentiments ordering political life","Legal codes"], answer: 2, explanation: "Political culture comprises shared orientations toward politics—civic culture, participant/subject/parochial types in Almond & Verba." },
  { id: 15, question: "Who popularised the 'End of Ideology' thesis?", options: ["Daniel Bell","Samuel Huntington","Francis Fukuyama","Seymour Martin Lipset"], answer: 0, explanation: "Daniel Bell's 'End of Ideology' argued for a post-ideological technocratic consensus in postwar Western politics." },
  { id: 16, question: "Democratic Peace Theory states:", options: ["Democracies often fight each other","Democracies rarely go to war with one another","Democracies never go to war","Democracies are more warlike"], answer: 1, explanation: "Democratic Peace Theory argues democracies rarely engage in militarised conflict with other democracies due to institutional and normative constraints." },
  { id: 17, question: "Separation of powers was systematically elaborated by:", options: ["John Locke","Montesquieu","James Madison","Alexander Hamilton"], answer: 1, explanation: "Montesquieu's Spirit of the Laws articulated the separation of executive, legislative and judicial functions to protect liberty." },
  { id: 18, question: "Who developed the Ideological State Apparatus (ISA) concept?", options: ["Antonio Gramsci","Louis Althusser","Georg Lukács","Rosa Luxemburg"], answer: 1, explanation: "Althusser's ISA concept explains how institutions (education, media) reproduce ideology and social relations." },
  { id: 19, question: "Dual federalism is distinguished by:", options: ["Shared sovereignty","Overlapping functions","Clear separable spheres of power","Unitary central control"], answer: 2, explanation: "Dual federalism posits distinct jurisdictions for layers of government with limited overlap." },
  { id: 20, question: "Two concepts of liberty (positive/negative) were articulated by:", options: ["Isaiah Berlin","T. H. Green","John Rawls","Benjamin Constant"], answer: 0, explanation: "Isaiah Berlin articulated the distinction between negative (non-interference) and positive (self-realisation) liberty in 1958." },
  { id: 21, question: "Who famously wrote 'Property is theft'?", options: ["Mikhail Bakunin","Pierre-Joseph Proudhon","Peter Kropotkin","Karl Marx"], answer: 1, explanation: "Proudhon critiqued private property and became a foundational anarchist thinker." },
  { id: 22, question: "Which theory judges institutions by aggregate welfare?", options: ["Rawlsian justice","Deontology","Utilitarianism","Libertarianism"], answer: 2, explanation: "Utilitarianism evaluates actions/institutions by their consequences — the greatest happiness for the greatest number." },
  { id: 23, question: "Behaviouralism emphasises:", options: ["Historical narratives","Statistical analysis of mass behaviour","Legal doctrine","Normative theory"], answer: 1, explanation: "Behaviouralism prioritises empirically measurable political behaviour and uses survey/stats methods." },
  { id: 24, question: "Constructivism in IR focuses on:", options: ["Material power","Institutions only","Norms, identities and discourse","Economic dependency"], answer: 2, explanation: "Constructivism argues state interests are socially constructed through norms and identities rather than fixed material utilities." },
  { id: 25, question: "The doctrine 'law is what the sovereign commands' belongs to:", options: ["H. L. A. Hart","John Austin","Lon L. Fuller","Ronald Dworkin"], answer: 1, explanation: "John Austin's legal positivism defines law as sovereign commands backed by sanctions." },
  { id: 26, question: "Who developed Satyagraha adapted from Thoreau's ideas?", options: ["Subhas Chandra Bose","B. R. Ambedkar","Mahatma Gandhi","Jawaharlal Nehru"], answer: 2, explanation: "Gandhi operationalised non-violent civil resistance (Satyagraha) as mass anti-colonial strategy." },
  { id: 27, question: "Executive dominance in a polity refers to:", options: ["Constitutionalism","Responsible government","Concentration of power in the executive","Polyarchy"], answer: 2, explanation: "Executive dominance occurs when checks and balances are weak and the executive subsumes other branches." },
  { id: 28, question: "Who emphasised associations and civil society in democratic life?", options: ["Hannah Arendt","Alexis de Tocqueville","Jürgen Habermas","Antonio Gramsci"], answer: 1, explanation: "Tocqueville highlighted civic associations as critical for democratic health and mediating state-society relations." },
  { id: 29, question: "Structural functionalism posits:", options: ["Culture determinism only","Institutions perform functions to maintain system equilibrium","Individual agency only","Random change"], answer: 1, explanation: "Structural functionalism analyses how institutions' functions contribute to systemic stability, though criticised for circularity." },
  { id: 30, question: "Who wrote 'The Origins of Totalitarianism'?", options: ["Hannah Arendt","Karl Popper","Antonio Gramsci","Claude Lefort"], answer: 0, explanation: "Arendt analysed conditions enabling totalitarian regimes, focusing on ideology, anti-Semitism and bureaucratic terror." },
  { id: 31, question: "Who developed 'discourse ethics' and ideal speech situation?", options: ["Jürgen Habermas","John Rawls","Michel Foucault","Charles Taylor"], answer: 0, explanation: "Habermas grounds normative legitimacy in undistorted communicative action and rational discourse." },
  { id: 32, question: "Foucault's analysis of modern power emphasises:", options: ["Sovereign decree","Discipline and biopower","Legal positivism","Hegemony"], answer: 1, explanation: "Foucault analyses power as dispersed through institutions, disciplinary practices and biopolitics regulating populations." },
  { id: 33, question: "Communitarianism criticises liberalism for:", options: ["Overemphasis on community","Neglecting communal embeddedness of persons","Focusing on redistribution","Emphasising proceduralism"], answer: 1, explanation: "Communitarians argue liberal atomism overlooks how social ties shape identity and moral reasoning." },
  { id: 34, question: "Path dependency means:", options: ["Instant reversal is easy","Early institutional choices lock trajectories making reversal costly","Institutions are irrelevant","History does not matter"], answer: 1, explanation: "Initial choices create self-reinforcing paths that shape future institutional possibilities (lock-in effects)." },
  { id: 35, question: "Who authored 'End of Ideology' thesis?", options: ["Daniel Bell","Francis Fukuyama","Samuel Huntington","Roger Scruton"], answer: 0, explanation: "Bell argued the decline of grand ideological conflict in postwar Western politics, a controversial claim." },
  { id: 36, question: "The collective action problem shows:", options: ["Individuals always cooperate","Rational actors may free-ride leading to underprovision of public goods","Collective goods are easy to provide","Private goods are public"], answer: 1, explanation: "Olson demonstrated rational self-interest can discourage contribution to public goods in the absence of incentives." },
  { id: 37, question: "Classical social contract accounts base legitimacy on:", options: ["Divine mandate","Original hypothetical consent","Random authority","Hereditary rule"], answer: 1, explanation: "Social contract theorists (Hobbes, Locke, Rousseau) legitimise state authority via hypothetical or actual consent." },
  { id: 38, question: "Input vs output legitimacy map to:", options: ["Participation vs policy performance","Legal texts vs judicial interpretation","Media vs civil society","Taxation vs spending"], answer: 0, explanation: "Input legitimacy emphasises participation and democratic procedures; output legitimacy emphasises effective results and problem solving." },
  { id: 39, question: "Who formalised the 'security dilemma' concept in IR?", options: ["Kenneth Waltz","Thomas Hobbes","Herbert Butterfield","John H. Herz"], answer: 3, explanation: "John H. Herz and others articulated the security dilemma: defensive measures by one state can be perceived as threats by others." },
  { id: 40, question: "Substantive constitutionalism emphasises:", options: ["Procedural legality only","Material protection of rights and justice","Parliamentary supremacy only","Administrative convenience"], answer: 1, explanation: "Substantive constitutionalism asserts constitutions embody material principles such as rights and values beyond mere procedure." },
  { id: 41, question: "Which part of Indian Constitution enumerates judicially enforceable fundamental rights?", options: ["Directive Principles","Part III (Fundamental Rights)","Preamble","Union List"], answer: 1, explanation: "Part III of the Constitution lists Fundamental Rights, enforceable by courts, limiting state action." },
  { id: 42, question: "Who is central to elite theory (ruling class inevitability)?", options: ["Robert Dahl","Gaetano Mosca","Theda Skocpol","Samuel Huntington"], answer: 1, explanation: "Mosca argued political rule is conducted by an organised minority (ruling class) that governs the masses." },
  { id: 43, question: "Comparative historical analysis is best for:", options: ["Large-N causal estimation","Small-N contextual causal tracing","Survey design only","Pure theory"], answer: 1, explanation: "Comparative historical methods trace causal mechanisms across cases and time with attention to context." },
  { id: 44, question: "Deliberative democratic legitimacy relies on:", options: ["Aggregative voting","Inclusive rational discourse among affected parties","Elite bargaining alone","Pure plebiscitary rule"], answer: 1, explanation: "Deliberative theorists emphasise reasoned public discourse and inclusion for legitimate collective decisions." },
  { id: 45, question: "Neorealism explains state behaviour mainly through:", options: ["Identity and norms","Institutions primarily","Material capabilities and anarchy","Domestic politics only"], answer: 2, explanation: "Neorealism (Waltz) focuses on system structure—distribution of capabilities in an anarchic system—shaping state behaviour." },
  { id: 46, question: "Legitimacy in comparative politics refers to:", options: ["Electoral rules only","Citizen acceptance of authority as rightful","Bureaucratic procedures","Taxation share"], answer: 1, explanation: "Legitimacy is normative acceptance that political authority is rightful and justifiable, sustaining regime stability." },
  { id: 47, question: "Public choice theory applies:", options: ["Psychoanalysis to politics","Economic rationality to political actors","Mythology to institutions","Only normative ethics"], answer: 1, explanation: "Public choice uses economic models to explain political incentives, rent-seeking and collective action failures." },
  { id: 48, question: "An example of informal institution is:", options: ["Electoral law","Written constitution","Clientelist patronage networks","Statutory code"], answer: 2, explanation: "Informal institutions (norms, networks) shape behaviour despite lacking formal codification." },
  { id: 49, question: "Resource curse thesis claims:", options: ["Resources guarantee democracy","Natural-resource abundance can entrench authoritarianism and corruption","Resources always increase welfare","Resources reduce state revenue"], answer: 1, explanation: "Resource rents can weaken institutions, encourage corruption and reduce incentives for democratic accountability." },
  { id: 50, question: "Gold-standard for causal inference with random assignment is:", options: ["Comparative historical analysis","Randomised controlled trial (RCT)","Ethnography","Ordinary least squares only"], answer: 1, explanation: "RCTs provide strong internal validity via random assignment when ethically and practically feasible." },
  { id: 51, question: "Republican (non-domination) liberty emphasises:", options: ["Non-interference only","Freedom from arbitrary domination","Positive self-realisation only","Consumer freedom"], answer: 1, explanation: "Republican theorists (Pettit) define freedom as non-domination — absence of arbitrary power, not merely non-interference." },
  { id: 52, question: "Tocqueville highlighted which democratic requirement?", options: ["Complete state control","Independent judiciary and civic associations","Total market deregulation","One-party rule"], answer: 1, explanation: "Tocqueville valued institutional protections (like judiciary) and civic associations as defenses against tyranny of the majority." },
  { id: 53, question: "Historical materialism centres on:", options: ["Institutions only","Class relations and modes of production","Statistical inference","Postmodern discourse"], answer: 1, explanation: "Marxist historical materialism explains politics in relation to class dynamics and production modes shaping society." },
  { id: 54, question: "Corporatism typically features:", options: ["Ad hoc protest","Institutionalised group representation and negotiated policy-making","Unstructured lobbying only","No organised groups"], answer: 1, explanation: "Corporatism integrates organised interests into policy-making via peak associations and formal consultation." },
  { id: 55, question: "Charismatic authority rests on:", options: ["Legal-rational office","Custom and tradition","Devotion to leader's extraordinary qualities","Procedural legality"], answer: 2, explanation: "Weber's charismatic authority depends on followers' belief in the exceptional nature of a leader." },
  { id: 56, question: "Deontological ethics places centrality on:", options: ["Consequences only","Duties and rights irrespective of consequences","Utility maximisation","Economic outcomes"], answer: 1, explanation: "Deontology (Kant) argues morality hinges on duties and universalizable maxims, not solely results." },
  { id: 57, question: "A common critique of behaviouralism is that it:", options: ["Is overly normative","Reduces normative questions to measurable behaviour","Ignores empirical work","Is anti-quantitative"], answer: 1, explanation: "Critics argue behaviouralism marginalised normative concerns by focusing on quantifiable behaviour." },
  { id: 58, question: "Neoliberal institutionalists argue institutions:", options: ["Are irrelevant","Facilitate cooperation under anarchy by lowering transaction costs","Cause war","Are wholly determinative"], answer: 1, explanation: "Institutions reduce uncertainty, provide information and incentives enabling cooperation even without a hegemon." },
  { id: 59, question: "Ambedkar is known for:", options: ["Supporting social hierarchy","Advocating constitutional safeguards and social justice","Colonial collaboration","Economic libertarianism"], answer: 1, explanation: "B.R. Ambedkar championed a constitution protecting rights and structural reforms for marginalised groups." },
  { id: 60, question: "Clientelism denotes:", options: ["Programmatic welfare","Exchange of targeted material benefits for political support","Pure competition","Judicial activism"], answer: 1, explanation: "Clientelism creates personalized bonds via selective benefits (jobs, transfers) to secure electoral support." },
  { id: 61, question: "A postcolonial critique often targets:", options: ["Global capitalism exclusively","Liberal universalism and Eurocentric knowledge production","Statistical methods only","Local culture alone"], answer: 1, explanation: "Postcolonial critique interrogates Eurocentric assumptions and how knowledge production marginalises non-Western perspectives." },
  { id: 62, question: "Polity IV is used to measure:", options: ["Inequality","Democracy/authoritarian characteristics","GDP","Inflation"], answer: 1, explanation: "Polity scores provide standardised measures of regime authority and democratic quality used in comparative analysis." },
  { id: 63, question: "The 'basic structure' doctrine in India originated in:", options: ["Golaknath","Kesavananda Bharati","Minerva Mills","Shankari Prasad"], answer: 1, explanation: "Kesavananda Bharati v. State of Kerala (1973) established that Parliament cannot abrogate the Constitution's basic structure." },
  { id: 64, question: "Asymmetric federalism means:", options: ["All units equal","Some units have special autonomy or powers","Confederation only","Unitary central control"], answer: 1, explanation: "Asymmetric federalism grants differentiated competencies to certain subnational units." },
  { id: 65, question: "Marxist critique of formal rights often claims they are:", options: ["Perfectly egalitarian","Bourgeois abstractions masking material inequality","Universally liberating","Irrelevant"], answer: 1, explanation: "Marxists argue formal rights may obscure structural inequalities rooted in class relations." },
  { id: 66, question: "Dependency theory explains underdevelopment via:", options: ["Internal culture only","Integration into unequal world markets resulting in dependency","Pure domestic policy","Random events"], answer: 1, explanation: "Dependency theory highlights peripheral extraction and unequal exchange sustaining underdevelopment." },
  { id: 67, question: "A two-party system is characterised by:", options: ["One dominant party","Multiple fragmented parties","Two major parties alternating in power","No party competition"], answer: 2, explanation: "Two-party systems feature two main parties dominating electoral competition, often seen in plurality systems." },
  { id: 68, question: "Process tracing is best used to:", options: ["Large-N estimation","Uncover within-case causal mechanisms","Survey measurement","Random sampling"], answer: 1, explanation: "Process tracing examines causal mechanisms within cases via sequential evidence linking cause and effect." },
  { id: 69, question: "The 'end of history' thesis is associated with:", options: ["Francis Fukuyama","Samuel Huntington","John Rawls","Daniel Bell"], answer: 0, explanation: "Fukuyama argued liberal democracy represents the culminating ideological form after the Cold War." },
  { id: 70, question: "Human security shifts the referent object of security to:", options: ["The state","Individuals and their welfare","Military assets","Borders only"], answer: 1, explanation: "Human security emphasises individual safety, human rights and development over state-centric security." },
  { id: 71, question: "Delegative democracy term was proposed by:", options: ["Juan Linz","Robert Dahl","Almond & Verba","Seymour Martin Lipset"], answer: 0, explanation: "Linz described delegative democracies where executives claim broad mandates and institutions of horizontal accountability are weak." },
  { id: 72, question: "The Columbia school explains voting via:", options: ["Psychological party identification transmitted across generations","Pure rational choice","Only institutions","Geopolitics"], answer: 0, explanation: "Columbia school emphasises social networks and long-term attachments (party ID) shaping vote behaviour." },
  { id: 73, question: "State capture refers to:", options: ["Petty bribery only","Systemic private influence shaping laws and institutions","Strict rule of law","Only electoral fraud"], answer: 1, explanation: "State capture describes systematic shaping of public policy and law by private interests for private gain." },
  { id: 74, question: "Collective responsibility in parliamentary systems requires:", options: ["Judicial supremacy","Executive must retain legislature's confidence","Executive independence from legislature","Federal supremacy"], answer: 1, explanation: "Collective ministerial responsibility ties executive legitimacy to parliamentary confidence." },
  { id: 75, question: "Which work analyses capitalist production and surplus value?", options: ["The Communist Manifesto","Capital (Das Kapital)","German Ideology","Critique of the Gotha Programme"], answer: 1, explanation: "Marx's Capital studies commodity production, surplus value, and capitalist accumulation dynamics." },
  { id: 76, question: "A common liberal critique of multiculturalism warns that:", options: ["It overemphasises the individual","It may tolerate illiberal practices within groups threatening individual rights","It eliminates diversity","It centralises power"], answer: 1, explanation: "Liberals worry group rights may shield practices that violate universal individual rights, posing internal tensions." },
  { id: 77, question: "Keohane's contribution is associated with:", options: ["Marxist critique","Liberal institutionalism and role of regimes","Classical realism","Cultural determinism"], answer: 1, explanation: "Keohane argued institutions facilitate cooperation by reducing transaction costs and providing information." },
  { id: 78, question: "Minimalist (procedural) democracy emphasises:", options: ["Substantive equality","Competitive elections and civil liberties as minimal conditions","Deliberation only","Grand coalitions only"], answer: 1, explanation: "Procedural democracy defines democratic rule by institutional competition and electoral procedures rather than substantive outcomes." },
  { id: 79, question: "Identity politics often denotes:", options: ["Technocratic governance","Deliberative consensus only","Mobilisation of social identities (ethnicity, religion) by entrepreneurs","Pure class politics"], answer: 2, explanation: "Identity mobilisation activates group identities for political mobilisation, sometimes heightening polarization." },
  { id: 80, question: "Judicial review allows courts to:", options: ["Create legislation","Invalidate laws incompatible with the constitution","Execute laws","Manage elections"], answer: 1, explanation: "Judicial review is the power of courts to interpret constitutional compliance and strike down unconstitutional statutes." },
  { id: 81, question: "Radical feminism principally targets:", options: ["Minor policy tweaks","Structural patriarchy and public/private hierarchies","Pure market reforms","Traditionalism"], answer: 1, explanation: "Radical feminism seeks structural transformation to dismantle patriarchal systems shaping gender inequality." },
  { id: 82, question: "Open science practices emphasise:", options: ["Closed data","Replication, data/code sharing and transparency","Obfuscation","Only elite access"], answer: 1, explanation: "Open science encourages reproducibility through data and code availability and transparent reporting." },
  { id: 83, question: "Philip Pettit's republican liberty focuses on:", options: ["Maximising utility","Non-domination — absence of arbitrary interference","Only positive liberty","Only negative liberty"], answer: 1, explanation: "Pettit defines freedom as non-domination where arbitrary control by others is absent even if interference exists occasionally." },
  { id: 84, question: "Developmental state theory highlights:", options: ["Weak bureaucracy","Bureaucratic capacity, autonomy and state-business coalitions for growth","Only market forces","Resource curse"], answer: 1, explanation: "Developmental state explanations credit competent bureaucracies and coordinated industrial policy for rapid growth." },
  { id: 85, question: "Affirmative action is an instrument of:", options: ["Laissez-faire","Corrective justice to redress historical inequalities","Pure meritocracy only","Market-only allocation"], answer: 1, explanation: "Affirmative policies seek compensatory correction for historical exclusions and group disadvantages." },
  { id: 86, question: "C. Wright Mills wrote about:", options: ["Pluralism","The power elite — concentration of power across sectors","Structural functionalism","Deliberative democracy"], answer: 1, explanation: "Mills argued US power is concentrated among a small elite in corporate, military and political spheres." },
  { id: 87, question: "Jus cogens norms are:", options: ["Optional treaty clauses","Peremptory norms that bind states regardless of consent","Domestic statutes only","Diplomatic conventions only"], answer: 1, explanation: "Jus cogens are peremptory norms (e.g., prohibition of genocide) that cannot be derogated by treaty." },
  { id: 88, question: "Agenda-setting and framing concern:", options: ["Electoral law only","Media influence on salience and interpretation of issues","Judicial review only","Tax policy"], answer: 1, explanation: "Media shapes what issues are salient (agenda-setting) and how they are interpreted (framing), affecting public opinion." },
  { id: 89, question: "Tilly's bellicist argument links state formation to:", options: ["Trade unions","War-making, fiscal capacity and bureaucratic growth","Religion","Cultural homogeneity"], answer: 1, explanation: "Tilly argued war-making incentivised extraction and institution-building (taxation, bureaucracy) producing modern states." },
  { id: 90, question: "Originalism in constitutional interpretation emphasises:", options: ["Living adaptation","Historical meaning at enactment","Pure pragmatism","Judicial policy-making"], answer: 1, explanation: "Originalists interpret constitutional texts according to original public meaning/historical intentions." },
  { id: 91, question: "Clientelist distribution is characterised by:", options: ["Programmatic policy","Selective material exchanges for votes","Universal provision only","Meritocratic hiring only"], answer: 1, explanation: "Clientelism uses targeted incentives to secure political loyalty rather than programmatic policy delivery." },
  { id: 92, question: "Robert Dahl is known for:", options: ["Elite theory","Pluralist theory of dispersed group power","Marxist structuralism","Dependency theory"], answer: 1, explanation: "Dahl's pluralism posits multiple competing groups share influence, preventing single-group domination." },
  { id: 93, question: "Rule of law entails:", options: ["Arbitrary power","Government subject to law and predictable legal rules","Majority tyranny","Only executive fiat"], answer: 1, explanation: "Rule of law requires the application of general legal rules constraining arbitrary state action." },
  { id: 94, question: "Hobbes's state of nature justification primarily aims to:", options: ["Legitimise aristocracy","Explain social contract as escape from violent competition","Support laissez-faire","Promote communal property only"], answer: 1, explanation: "Hobbes argued individuals consent to sovereign authority to escape insecure state of nature characterised by war of all against all." },
  { id: 95, question: "Evidence-based policy emphasises:", options: ["Anecdote","Pilot testing, evaluation and iterative scaling grounded in empirical evidence","Policy imitation only","Random guesswork"], answer: 1, explanation: "Evidence-based policy relies on rigorous evaluation (including RCTs, pilots) to inform scalable policy decisions." },
  { id: 96, question: "Rawls' difference principle requires:", options: ["Equality without exception","Inequalities are permitted only if they benefit the least advantaged","No redistribution","Strict meritocracy"], answer: 1, explanation: "The difference principle allows social/economic inequalities only if they improve the prospects of the least advantaged." },
  { id: 97, question: "Tyranny of the majority warns about:", options: ["Judicial supremacy","Majority oppressing minorities absent safeguards","Economic collapse","Administrative delay"], answer: 1, explanation: "Classic liberal thinkers warned democracy without rights protections risks majority oppression of minorities." },
  { id: 98, question: "Survey research is used to:", options: ["Conduct long ethnographies","Measure population attitudes via representative samples","Only for lab experiments","Only qualitative interviews"], answer: 1, explanation: "Survey methods collect structured data from samples to infer attitudes and behaviour in populations." },
  { id: 99, question: "Neoliberal globalisation emphasises:", options: ["State-led industrialisation","Trade/liberalised capital flows and market liberalisation","Autarky","Planned economy"], answer: 1, explanation: "Neoliberal globalisation prioritises deregulation, trade liberalisation and capital mobility." },
  { id: 100, question: "Article 356 in India authorises:", options: ["President's Rule when state machinery fails","Emergency under Article 352","Judicial appointment","Amendment process"], answer: 0, explanation: "Article 356 allows central takeover (President's Rule) in states under specified constitutional breakdown conditions; its use is judicially reviewable." },
  { id: 101, question: "Plato's political ideal emphasised:", options: ["Rule by market","Government by philosopher-kings","Pure democracy","Aristocratic merchant rule"], answer: 1, explanation: "Plato's Republic proposes rule by philosopher-rulers selected for wisdom and virtue." },
  { id: 102, question: "Median voter theorem predicts:", options: ["Party divergence","Convergence to median voter under certain conditions","No pattern","Immediate polarisation"], answer: 1, explanation: "Under single-peaked preferences and two-party competition, parties gravitate to median voter positions to win votes." },
  { id: 103, question: "Foucauldian genealogy examines:", options: ["Only normative law","How power/knowledge produces truths and subjectivities","Game theoretic equilibria","Statistical distributions"], answer: 1, explanation: "Foucault's genealogical method traces the formation of discourses and power relations that constitute 'truths' and subjects." },
  { id: 104, question: "Communitarian critique argues liberalism:", options: ["Overvalues tradition","Neglects embeddedness of persons in communities","Advocates too much state power","Fails to respect markets"], answer: 1, explanation: "Communitarians stress that persons are socially constituted and that moral reasoning depends on communal contexts." },
  { id: 105, question: "Cross-cutting cleavages tend to:", options: ["Increase polarisation","Mitigate conflict by dividing loyalties","Make politics impossible","Eliminate parties"], answer: 1, explanation: "Cross-cutting cleavages distribute loyalties across multiple dimensions, reducing concentrated antagonisms." },
  { id: 106, question: "Consociational democracy relies on:", options: ["Unilateral rule","Power-sharing among elites with proportionality, vetoes, and autonomy","Single-party dominance","Total decentralisation"], answer: 1, explanation: "Lijphart's consociational model uses elite bargains and institutional safeguards to manage deep divisions." },
  { id: 107, question: "R2P stands for:", options: ["Right to Protest","Responsibility to Protect","Regional Trade Pact","Rule to Precede"], answer: 1, explanation: "R2P holds states responsible to protect citizens; international intervention may be justified when states fail to prevent mass atrocities." },
  { id: 108, question: "Modernisation theory links democracy to:", options: ["Economic development and social modernisation","Only culture","Military power","Trade deficits"], answer: 0, explanation: "Modernisation theories posit industrialisation, urbanisation and education foster democratic institutions and values." },
  { id: 109, question: "Incumbency advantage arises from:", options: ["Low visibility","Office resources, name recognition and patronage networks","Random chance","Only campaign spending"], answer: 1, explanation: "Incumbents benefit from visibility, access to resources and networks that aid re-election." },
  { id: 110, question: "State capacity is:", options: ["Political rhetoric","Ability to implement policy, extract revenue and enforce rules effectively","Opposition strength","Media freedom"], answer: 1, explanation: "State capacity denotes bureaucratic, fiscal and coercive capacity enabling governance and service delivery." },
  { id: 111, question: "Nozick's political stance is best described as:", options: ["Social democracy","Libertarian minimal state","Communism","Deliberative socialism"], answer: 1, explanation: "Nozick defends a minimal state constrained to protection functions and rejects redistributive coercion." },
  { id: 112, question: "Keck & Sikkink's 'boomerang' mechanism shows:", options: ["States always act alone","Transnational advocacy can pressure home states by routing demands through international networks","Networks are irrelevant","Only military pressure works"], answer: 1, explanation: "Transnational networks enable actors to circumvent unresponsive states, mobilising international pressure and norms to effect change." },
  { id: 113, question: "Institutionalisation contributes to political stability by:", options: ["Reducing predictability","Embedding routines and expectations that make politics more predictable","Increasing volatility","Removing rule of law"], answer: 1, explanation: "Well-institutionalised norms and procedures increase predictability and legitimacy, reducing volatility." },
  { id: 114, question: "Downsian model predicts parties will:", options: ["Polarise","Converge to median voter in two-party plurality contexts","Always adopt extreme positions","Ignore voters"], answer: 1, explanation: "Downs models office-seeking parties converging toward centrist positions to capture median voters under certain conditions." },
  { id: 115, question: "Kesavananda Bharati v. State of Kerala (1973) established:", options: ["Parliamentary absolute power","Basic structure doctrine limiting Parliament's amending power","No judicial review","No fundamental rights"], answer: 1, explanation: "Kesavananda affirmed that constitutional amendments cannot destroy the Constitution's basic structure." },
  { id: 116, question: "Procedural vs substantive democracy contrasts:", options: ["Elections only vs outcomes/rights and welfare","Same concept","Economic vs cultural","Only in theory"], answer: 0, explanation: "Procedural democracy focuses on rules/procedures (e.g., elections), substantive democracy emphasises results like rights and social justice." },
  { id: 117, question: "Montesquieu advocated:", options: ["Concentration of powers","Separation of powers and rule of law","Absolute monarchy","No institutions"], answer: 1, explanation: "Montesquieu's theory argued separation of powers as essential to preserve liberty and prevent arbitrary rule." },
  { id: 118, question: "Constructivism in IR posits that:", options: ["Material forces only matter","Norms and identities shape state interests over time","All actors rationally maximise power","Trade determines everything"], answer: 1, explanation: "Constructivists show how norms and identities can change states' interests and behaviour through social interaction." },
  { id: 119, question: "Decolonial IR criticises:", options: ["Realism only","Eurocentrism in IR theory and knowledge production","Quantitative methods only","Democratic theory"], answer: 1, explanation: "Decolonial perspectives challenge Western-centric frameworks and seek plurality in IR scholarship." },
  { id: 120, question: "Political trust correlates with:", options: ["Regime stability and compliance","Only GDP","Only literacy","Only urbanisation"], answer: 0, explanation: "High political trust tends to improve compliance and consolidates regime legitimacy; low trust can destabilise institutions." },
  { id: 121, question: "Corporatist collective bargaining institutionalises negotiation among:", options: ["Only politicians","State, employers and organised labour","Only NGOs","Only activists"], answer: 1, explanation: "Corporatist bargaining integrates organised interests (unions/employers) and the state in negotiated policy-making." },
  { id: 122, question: "Output legitimacy emphasises:", options: ["Participation only","Policy performance and problem-solving as source of legitimacy","Only law","Only rituals"], answer: 1, explanation: "Output legitimacy is derived from effective policymaking and performance rather than just participatory procedures." },
  { id: 123, question: "Communitarians like Sandel argue liberalism:", options: ["Fully adequate","May obscure social solidarity and shared goods","Is the only option","Is purely economic"], answer: 1, explanation: "Communitarians critique liberal individualism for neglecting communal obligations and social goods." },
  { id: 124, question: "Proportional representation electoral systems typically:", options: ["Produce two parties","Yield multiparty parliaments and coalition governments","Prevent coalitions","Are less representative"], answer: 1, explanation: "PR systems allocate seats roughly in proportion to votes, often producing multi-party coalitions." },
  { id: 125, question: "Social capital (Putnam) refers to:", options: ["Economic capital alone","Networks, norms, and trust facilitating collective action","Only public money","Formal institutions only"], answer: 1, explanation: "Social capital emphasises networks and reciprocal norms that improve civic cooperation and institutional performance." },
  { id: 126, question: "Deliberative democratic theory stresses:", options: ["Outcomes only","Public reason and fair deliberation as legitimating procedures","Policing only","Bureaucracy only"], answer: 1, explanation: "Deliberative democracy privileges inclusive, reasoned discourse as the basis of legitimate collective decisions." },
  { id: 127, question: "Discourse and ideological analysis examine:", options: ["Only budgets","How language and institutions shape legitimation and policy preferences","Only voter turnout","Only legal statutes"], answer: 1, explanation: "Discourse analysis explores how narratives and institutions reproduce legitimating frameworks and policy orientations." },
  { id: 128, question: "A central tension in liberal democracies is between:", options: ["Party funds and candidates","Majority rule and minority rights protections","Only tax policy","Only foreign policy"], answer: 1, explanation: "Reconciling majority rule with the protection of minorities and fundamental rights is a core liberal problem." },
  { id: 129, question: "Historical institutionalism emphasises:", options: ["Only current actors","How historical legacies shape present policy choices via path dependency","No causality","Pure randomness"], answer: 1, explanation: "Historical institutionalism highlights sequencing and institutional legacies that constrain present options." },
  { id: 130, question: "Cosmopolitan egalitarianism argues for:", options: ["Borders-first distributive justice","Global distributive obligations across borders","Isolationism","Only national welfare"], answer: 1, explanation: "Cosmopolitan theorists argue for justice measures that cross national boundaries to reduce global inequality." },
  { id: 131, question: "Mixed-member proportional (MMP) systems:", options: ["Are pure PR","Combine district plurality with party lists to achieve proportionality","Are identical to FPTP","Are majority-runoff"], answer: 1, explanation: "MMP systems pair constituency seats with party lists to balance proportionality and local representation." },
  { id: 132, question: "Marxist IR emphasises:", options: ["State interests only","Global capitalism, class relations and dependency","Only norms","Only institutions"], answer: 1, explanation: "Marxist/critical IR locates international outcomes in capitalist relations and class interests shaping states and markets." },
  { id: 133, question: "A sovereignty-based critique of humanitarian intervention emphasises:", options: ["Universal intervention","Risks to state sovereignty and potential instrumentalisation of humanitarian rhetoric","Only the ICC","Only the UN"], answer: 1, explanation: "Sovereignty defenders caution against non-consensual intervention that may be misused for geopolitical ends." },
  { id: 134, question: "Small-N comparative research faces which challenge?", options: ["No limits","External validity and generalisation difficulties","Automatic causation","Large samples only"], answer: 1, explanation: "Small-N designs complicate statistical generalisation; they require in-depth case analysis and causal process tracing." },
  { id: 135, question: "Authoritarian resilience is often explained by:", options: ["Only repression","Combination of repression, cooptation and performance legitimacy","Automatic collapse","Only elections"], answer: 1, explanation: "Resilient autocracies mix coercion, elite cooptation, economic performance and controlled liberalisations to endure." },
  { id: 136, question: "Living constitutionalism supports:", options: ["Static text only","Evolving interpretation to reflect contemporary needs and values","No judicial interpretation","Only originalist reading"], answer: 1, explanation: "Living constitutionalists argue constitutional meaning can adapt to social change while preserving core principles." },
  { id: 137, question: "Targeted transfers and patronage are tools of:", options: ["Universal programmatic policy","Clientelist distributive politics","Pure market reforms","Judicial activism"], answer: 1, explanation: "Patronage and selective transfers secure political loyalty in clientelist systems." },
  { id: 138, question: "The 'two-level game' model describes:", options: ["Military- civilian interactions only","How leaders negotiate internationally while constrained by domestic constituencies (Putnam)","Only economic bargaining","Only cultural exchange"], answer: 1, explanation: "Putnam's two-level game frames international negotiation as simultaneous bargaining at domestic and international levels." },
  { id: 139, question: "Partisan dealignment refers to:", options: ["Stronger party ties","Decline in party identification and rise of candidate-centred politics","Only stronger turnout","Only more party discipline"], answer: 1, explanation: "Dealignment denotes weakening of long-term partisan attachments and more volatile voting behaviour." },
  { id: 140, question: "Principal-agent problems describe:", options: ["Perfect alignment of interests","Agents may diverge from principals' preferences requiring monitoring/incentives","No need for governance","Agents are always benevolent"], answer: 1, explanation: "Delegation creates monitoring and incentive issues because agents' actions may not match principals' preferences." },
  { id: 141, question: "International criminal justice (ICC/tribunals) aims to:", options: ["Protect sovereign immunity","Hold perpetrators accountable for atrocities such as genocide and crimes against humanity","Abolish courts","Only civil disputes"], answer: 1, explanation: "Ad hoc tribunals and the ICC prosecute serious international crimes to promote accountability." },
  { id: 142, question: "Varieties of Capitalism literature relates welfare/institutional forms to:", options: ["Random choice","Historical coalitions, class structure and institutional complementarities","Only culture","Only ideology"], answer: 1, explanation: "VoC links institutional complementarities and historical coalitions to different welfare and capitalist models." },
  { id: 143, question: "Soft law differs from hard law in that soft law:", options: ["Is legally binding","Is non-binding normative guidance that can shape behaviour","Always has enforcement","Is constitutional text"], answer: 1, explanation: "Soft law includes guidelines and norms that influence state behaviour without formal binding obligations." },
  { id: 144, question: "Who emphasised civic associations as democratic bulwarks against centralising bureaucracy?", options: ["Alexis de Tocqueville","John Rawls","Karl Popper","Robert Dahl"], answer: 0, explanation: "Tocqueville celebrated voluntary associations as counterweights to despotism and as civic training ground." },
  { id: 145, question: "Competitive authoritarian regimes permit:", options: ["Full liberal democracy","Limited competition biased in favour of incumbents","Only single party rule","No elections"], answer: 1, explanation: "Competitive authoritarianism retains elections and opposition but skews rules to favour incumbents, undermining genuine competition." },
  { id: 146, question: "Global justice cosmopolitanism argues for:", options: ["Strict nationalism","Global institutional reforms and redistribution to address cross-border inequality","No cross-border obligations","Only state-level justice"], answer: 1, explanation: "Cosmopolitan justice advocates global-level institutional responses (e.g., redistribution) to address global inequality." },
  { id: 147, question: "Governance studies emphasise:", options: ["State monopoly","Multi-level governance with non-state actors, networks and partnerships","Only centralisation","Only hierarchy"], answer: 1, explanation: "Governance highlights polycentric interactions among state and non-state actors across levels." },
  { id: 148, question: "Resource-conflict theories suggest civil war risk can be driven by:", options: ["GDP only","Competition over resource rents and weak institutions","Only ideology","Only external invasion"], answer: 1, explanation: "Greed/grievance frameworks show resource rents and weak governance can incentivise insurgency." },
  { id: 149, question: "Presumption of constitutionality is an interpretive rule where courts:", options: ["Default to invalidation","Interpret statutes to preserve constitutionality where possible","Ignore constitution","Favor legislature always"], answer: 1, explanation: "Courts often prefer readings that preserve a law's constitutionality via harmonious construction and interpretive presumptions." },
  { id: 150, question: "Constructivist mechanisms of norm change include:", options: ["Only force","Socialisation, persuasion and institutionalisation leading states to internalise norms","Market pressure only","Random diffusion"], answer: 1, explanation: "Constructivists highlight socialisation and persuasion as pathways for norm diffusion and internalisation." }
];

/* ===================== MCQ BANK: 50 PAPER-1 ===================== */
/* Fixed the earlier malformed entry and corrected quoting */
const paper1_50 = [
  { id: "P1-1", question: "Which of the following best describes the principal aim of research methodology as distinct from research methods?", options: ["Methods are the philosophical basis; methodology is just tools","Methodology concerns the logic and justification of procedures while methods are techniques","Methodology is identical to methods","Methodology refers only to data collection"], answer: 1, explanation: "Methodology reflects the epistemological rationale and justification for chosen methods; methods are the operational techniques." },
  { id: "P1-2", question: "A researcher hypothesises that higher faculty research output leads to improved institutional ranking. The dependent variable is:", options: ["Faculty output","Institutional ranking","Both are independent","Neither"], answer: 1, explanation: "Institutional ranking is the dependent (outcome) variable; faculty output is the independent predictor." },
  { id: "P1-3", question: "Which sampling technique most reduces selection bias when a complete sampling frame exists?", options: ["Convenience sampling","Simple random sampling","Purposive sampling","Snowball sampling"], answer: 1, explanation: "Simple random sampling gives each unit equal chance, minimising selection bias with a known frame." },
  { id: "P1-4", question: "When RCTs are infeasible, which design best supports causal inference?", options: ["Randomised controlled trial","Cross-sectional survey","Quasi-experimental designs (matching, DiD)","Ethnography"], answer: 2, explanation: "Quasi-experimental designs approximate causal inference using natural variation and matching techniques." },
  { id: "P1-5", question: "Constructive alignment in teaching means:", options: ["Aligning classroom furniture","Ensuring outcomes, teaching activities and assessment are coherently aligned","Following textbook order","Aligning faculty timetables"], answer: 1, explanation: "Constructive alignment links intended learning outcomes with teaching methods and assessment tasks so students achieve outcomes." },
  { id: "P1-6", question: "Which dispersion measure is robust for skewed data?", options: ["Mean","Standard deviation","Interquartile range (IQR)","Mode"], answer: 2, explanation: "IQR measures middle 50% and resists distortion by outliers or skewness." },
  { id: "P1-7", question: "Validity vs reliability: which is correct?", options: ["Reliability is truth; validity is consistency","Reliability is consistency of measurement; validity is whether the instrument measures the intended construct","Validity ensures repeated results; reliability ensures correct results","They are synonyms"], answer: 1, explanation: "Reliability = consistency; validity = accuracy (measuring intended construct)." },
  { id: "P1-8", question: "Criterion-related validity is illustrated by:", options: ["Internal consistency","Correlation with an external benchmark","Face validity","Construct validity via factor analysis"], answer: 1, explanation: "Criterion validity shows instrument predicts or correlates with a relevant external criterion." },
  { id: "P1-9", question: "Qualitative interpretivist research typically uses:", options: ["Large random samples","Context-rich small purposive samples","Only experiments","Strict surveys"], answer: 1, explanation: "Interpretive approaches prioritise depth, meaning and context with purposive sampling." },
  { id: "P1-10", question: "Double-blind peer review means:", options: ["Editor and reviewer unknown","Both author and reviewer identities are concealed from each other","Reviewers know authors","Authors know reviewers"], answer: 1, explanation: "Double-blind hides author identity from reviewers and reviewer identity from authors to reduce bias." },
  { id: "P1-11", question: "Which statistical test compares means across three independent groups under normality and equal variances?", options: ["t-test","One-way ANOVA","Chi-square","Mann-Whitney U"], answer: 1, explanation: "ANOVA compares three or more group means while controlling Type I error across comparisons." },
  { id: "P1-12", question: "Paraphrasing without attribution is called:", options: ["Direct quotation","Mosaic/paraphrase plagiarism (ideas without citation)","Self-plagiarism","Data fabrication"], answer: 1, explanation: "Paraphrasing another's ideas without citation misrepresents originality and constitutes plagiarism." },
  { id: "P1-13", question: "Journal impact factor is:", options: ["Number of articles per year","Average citations per article over a window","Download count only","Altmetric only"], answer: 1, explanation: "Impact factor = average citations per citable item over a defined period (often two years)." },
  { id: "P1-14", question: "Which fallacy confuses correlation with causation?", options: ["Ad hominem","Post hoc / cum hoc","Non sequitur","Begging the question"], answer: 1, explanation: "Post hoc/cum hoc mistakes temporal or statistical association for causal linkage without further evidence." },
  { id: "P1-15", question: "Which indicator measures income inequality?", options: ["GDP per capita","Gini coefficient","HDI","CPI"], answer: 1, explanation: "Gini coefficient summarises inequality on a scale where higher values indicate greater disparity." },
  { id: "P1-16", question: "Correct interpretation of a p-value is:", options: ["Probability H0 is true","Probability of data given H0 is true","Effect size","Probability of H1"], answer: 1, explanation: "p-value = P(data|H0); it is not P(H0|data) and does not indicate effect size." },
  { id: "P1-17", question: "Best central tendency measure with outliers present:", options: ["Mean","Median","Mode","Variance"], answer: 1, explanation: "Median is robust to extreme values and better summarises central location in skewed data." },
  { id: "P1-18", question: "Which is NOT a validity type for experiments?", options: ["Internal validity","External validity","Construct validity","Author's academic rank"], answer: 3, explanation: "Author rank is irrelevant to experimental validity; internal/external/construct are valid concerns." },
  { id: "P1-19", question: "An ordinal scale example is:", options: ["Celsius temperature","Likert agreement scale","Citation counts","Income"], answer: 1, explanation: "Likert items are ordinal — ordered categories without equal interval guarantees." },
  { id: "P1-20", question: "Metric summarising middle 50%:", options: ["Range","Interquartile range (IQR)","Standard deviation","Variance"], answer: 1, explanation: "IQR reflects dispersion by subtracting Q1 from Q3, robust to outliers." },
  { id: "P1-21", question: "Valid informed consent must exclude:", options: ["Disclosure","Voluntariness","Coercion","Comprehension"], answer: 2, explanation: "Coercion invalidates consent; valid consent requires voluntary, informed, comprehended agreement." },
  { id: "P1-22", question: "Hypothesis testing cannot:", options: ["Formulate hypotheses","Select significance level","Prove alternative hypothesis with absolute certainty","Compute p-values"], answer: 2, explanation: "NHST evaluates evidence, but cannot definitively prove hypotheses with absolute certainty." },
  { id: "P1-23", question: "Common reference management tools include:", options: ["SPSS","EndNote/Mendeley/Zotero","MATLAB","NVivo"], answer: 1, explanation: "EndNote, Mendeley and Zotero manage citations and format bibliographies." },
  { id: "P1-24", question: "Student-centred active pedagogy emphasises:", options: ["Lecture only","Constructivist and activity-based learning","Rote learning","Dictation"], answer: 1, explanation: "Constructivist pedagogy uses active tasks and problem-solving to build knowledge." },
  { id: "P1-25", question: "To generate theory from data, use:", options: ["Confirmatory factor analysis","Grounded theory","RCT","Meta-analysis"], answer: 1, explanation: "Grounded theory is inductive, generating conceptual frameworks from qualitative data." },
  { id: "P1-26", question: "Content validity assesses:", options: ["Coverage of construct domain by items","Concurrent correlation only","Test-retest reliability","Inter-rater reliability"], answer: 0, explanation: "Content validity indicates items comprehensively sample the intended construct domain." },
  { id: "P1-27", question: "If r = 0.02 (p < .05) in very large n, interpret as:", options: ["Strong effect","Statistically significant but likely substantively trivial","No effect","Causation proven"], answer: 1, explanation: "Large samples can yield tiny but statistically significant correlations; substantive importance depends on effect size." },
  { id: "P1-28", question: "Qualitative coding tools include:", options: ["SPSS","NVivo/Atlas.ti","R base","Stata"], answer: 1, explanation: "NVivo and Atlas.ti are designed for coding, memoing and thematic analysis of qualitative data." },
  { id: "P1-29", question: "To reduce dimensionality and find latent factors use:", options: ["Chi-square","Exploratory factor analysis","t-test","Logistic regression"], answer: 1, explanation: "EFA uncovers latent constructs by explaining covariation among observed measures." },
  { id: "P1-30", question: "Top journals prioritise:", options: ["Affiliation only","Methodological rigor and original contribution","Layout aesthetics only","Number of pages"], answer: 1, explanation: "High-quality journals evaluate originality, rigor, theoretical and empirical contribution." },
  { id: "P1-31", question: "A longitudinal panel study:", options: ["Is cross-sectional","Follows same units over time","Is a one-time survey","Is a meta-analysis"], answer: 1, explanation: "Panel designs measure the same units repeatedly to study dynamics and causal processes." },
  { id: "P1-32", question: "Sampling error decreases when:", options: ["Sample size increases","Bias increases","Non-sampling error rises","Response rate falls"], answer: 0, explanation: "Random sampling error (standard error) declines as sample size increases; systematic bias may persist." },
  { id: "P1-33", question: "Descriptive vs inferential statistics:", options: ["Descriptive generalises; inferential summarises","Descriptive summarises data; inferential draws population inferences from samples","They are identical","Inferential is graphical only"], answer: 1, explanation: "Descriptive stats describe a sample; inferential stats generalise from sample to population." },
  { id: "P1-34", question: "A limitation of online surveys is:", options: ["Guaranteed representativeness","Coverage bias due to internet access disparities","No measurement error","Always high response rate"], answer: 1, explanation: "Online modes may underrepresent those without reliable internet, causing coverage bias." },
  { id: "P1-35", question: "Constructive alignment ties assessment to:", options: ["Syllabus length","Intended learning outcomes","Instructor convenience","Infrastructure"], answer: 1, explanation: "Assessments should measure the intended learning outcomes, per constructive alignment." },
  { id: "P1-36", question: "Full anonymisation of participant data ensures:", options: ["Identifiers permanently removed so participants cannot be reidentified","Open names with data","Only pseudonyms","Sharing identifiable lists"], answer: 0, explanation: "Anonymisation severs identifiers from data to protect privacy." },
  { id: "P1-37", question: "Normal distribution properties include:", options: ["Symmetry, mean=median=mode, skewness 0","Always positive only","Only odd moments","Always discrete"], answer: 0, explanation: "Normal distribution is symmetric with mean=median=mode and zero skewness; values can be negative or positive." },
  { id: "P1-38", question: "For reproducible systematic reviews you must:", options: ["Use subjective search only","Document search strings, databases and inclusion criteria explicitly","Not report methods","Only read one database"], answer: 1, explanation: "Systematic reviews require transparent documented search strategies and reproducible inclusion/exclusion rules." },
  { id: "P1-39", question: "Action research in pedagogy is:", options: ["Practitioner-led iterative inquiry to improve practice","Pure theoretical work","Only quantitative","Only external evaluation"], answer: 0, explanation: "Action research cycles through planning, action, observation and reflection to refine practice." },
  { id: "P1-40", question: "Poisson distribution models:", options: ["Continuous symmetric variables","Counts of rare events in fixed intervals","Normal variables only","Binary outcomes"], answer: 1, explanation: "Poisson is a discrete distribution for counts under independence and stationarity." },
  { id: "P1-41", question: "Convergent/discriminant evidence pertains to:", options: ["Construct validity","Face validity only","Criterion validity only","Temporal validity"], answer: 0, explanation: "Construct validity is shown by expected correlations with related constructs (convergent) and low correlations with distinct constructs (discriminant)." },
  { id: "P1-42", question: "Chi-square test is used for:", options: ["Correlation between continuous variables","Association between categorical variables in contingency tables","Comparing means","Principal components"], answer: 1, explanation: "Chi-square evaluates departures from expected counts under independence in categorical data." },
  { id: "P1-43", question: "Thematic coding is a technique for:", options: ["Qualitative data analysis","Parametric tests","Time-series econometrics","Survey sampling"], answer: 0, explanation: "Thematic coding organises qualitative data into themes and patterns." },
  { id: "P1-44", question: "Widening participation in higher education aims to:", options: ["Elitism","Equity and inclusion for underrepresented groups","Privatisation","Exclusion"], answer: 1, explanation: "Access and equity policies seek to broaden participation for marginalised learners." },
  { id: "P1-45", question: "To reduce publication bias in meta-analysis you should:", options: ["Search grey literature and perform sensitivity checks (funnel plots)","Only include published studies","Exclude dissertations","Only select positive results"], answer: 0, explanation: "Including grey literature and performing bias diagnostics reduces positive-result bias." },
  { id: "P1-46", question: "Cohen's d measures:", options: ["p-value","Standardized mean difference effect size","Odds ratio","Chi-square"], answer: 1, explanation: "Cohen's d is a standardized measure of difference between two means, independent of sample size." },
  { id: "P1-47", question: "Open educational resources (OER) are:", options: ["Always paid","Freely licenced materials that can be reused/adapted","Proprietary only","Unmodifiable"], answer: 1, explanation: "OER use open licences (e.g., CC) to allow adaptation, reuse and redistribution." },
  { id: "P1-48", question: "Triangulation in mixed methods means:", options: ["Only qualitative methods","Combining methods/data sources to corroborate findings","Discarding one method entirely","Only statistical matching"], answer: 1, explanation: "Triangulation strengthens validity by integrating multiple methods or data sources." },
  { id: "P1-49", question: "For a binary dependent variable use:", options: ["OLS linear regression","Logistic regression","ANOVA only","PCA"], answer: 1, explanation: "Logistic regression models binary outcomes via log-odds and is appropriate for dichotomous dependent variables." },
  { id: "P1-50", question: "Good reproducible research practice includes:", options: ["Deleting raw data","Documenting provenance, sharing anonymised data and code","Relying on memory","Only sharing final figures"], answer: 1, explanation: "Reproducibility requires archived raw data, code, documentation and provenance metadata." }
];

/* ===================== UTILITIES & SAFE SELECTORS ===================== */
function el(selector) { return document.querySelector(selector); }
function elAll(selector) { return Array.from(document.querySelectorAll(selector)); }
function make(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const k in props) {
    if (k === 'class') node.className = props[k];
    else if (k === 'text') node.textContent = props[k];
    else if (k === 'html') node.innerHTML = props[k];
    else node.setAttribute(k, props[k]);
  }
  children.forEach(c => { if (typeof c === 'string') node.appendChild(document.createTextNode(c)); else if (c) node.appendChild(c); });
  return node;
}

/* ===================== RENDERER: sections, accordions, option-click ===================== */
(function renderAll() {
  const container = document.getElementById('question-container') || document.querySelector('.container') || document.body;
  if (!container) return;

  // Create a fragment for performance
  const frag = document.createDocumentFragment();

  function renderSection(titleText, items, topicLabel) {
    const sectionHeader = make('div', { class: 'section-header', text: titleText });
    frag.appendChild(sectionHeader);

    items.forEach((q, idx) => {
      const acc = make('div', { class: 'accordion' });

      // Header as button for accessibility
      const header = make('button', { class: 'accordion-header', type: 'button', 'aria-expanded': 'false', 'aria-controls': `content-${String(q.id).replace(/\s+/g,'')}` , text: `Q${q.id}: ${q.question}` });
      acc.appendChild(header);

      const content = make('div', { class: 'accordion-content', id: `content-${String(q.id).replace(/\s+/g,'')}`, 'aria-hidden': 'true' });

      const badge = make('div', { class: 'topic-badge', text: topicLabel || 'Topic: Advanced Political Science' });
      content.appendChild(badge);

      // options as buttons
      const optionsWrapper = make('div', { class: 'options-wrapper' });
      q.options.forEach((opt, i) => {
        const optBtn = make('button', { class: 'option', type: 'button', 'data-qid': q.id, 'data-idx': i, text: `${String.fromCharCode(65 + i)}. ${opt}` });
        optionsWrapper.appendChild(optBtn);
      });
      content.appendChild(optionsWrapper);

      const correctDiv = make('div', { class: 'correct-answer', text: `Correct Answer: ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}` });
      // hide correct answer initially for cleaner UX; but keep accessible
      correctDiv.style.display = 'none';
      content.appendChild(correctDiv);

      const expl = make('div', { class: 'explanation', text: q.explanation || '' });
      expl.style.display = 'none';
      content.appendChild(expl);

      acc.appendChild(content);
      frag.appendChild(acc);
    });
  }

  renderSection('UGC NET POLITICAL SCIENCE (2015) — 150 Advanced MCQs', mcqs2015, 'Advanced Political Science');
  renderSection('UGC NET PAPER-1 — 50 Advanced Teaching & Research Aptitude MCQs', paper1_50, 'Paper-1: Teaching & Research Aptitude');

  container.appendChild(frag);

  // Accordion toggle behaviour (delegated)
  container.addEventListener('click', (ev) => {
    const header = ev.target.closest('.accordion-header');
    if (header) {
      const acc = header.closest('.accordion');
      const content = acc.querySelector('.accordion-content');
      const expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!expanded));
      content.setAttribute('aria-hidden', String(expanded));
      content.style.display = expanded ? 'none' : 'block';
      return;
    }

    // Option button clicked -> check answer and show explanation
    const opt = ev.target.closest('.option');
    if (opt) {
      const qid = opt.getAttribute('data-qid');
      const idx = Number(opt.getAttribute('data-idx'));
      // find the question object
      const q = mcqs2015.find(x => String(x.id) === String(qid)) || paper1_50.find(x => String(x.id) === String(qid));
      if (!q) return;

      const acc = opt.closest('.accordion');
      const content = acc.querySelector('.accordion-content');
      // disable all option buttons for this question to prevent re-click spamming
      const opts = Array.from(content.querySelectorAll('.option'));
      opts.forEach(b => b.disabled = true);

      // highlight selected and correct
      opts.forEach(b => {
        b.classList.remove('selected', 'correct', 'incorrect');
      });
      opt.classList.add('selected');
      const correctIdx = q.answer;
      if (idx === correctIdx) {
        opt.classList.add('correct');
      } else {
        opt.classList.add('incorrect');
        // highlight the correct button too
        const correctBtn = opts.find(b => Number(b.getAttribute('data-idx')) === correctIdx);
        if (correctBtn) correctBtn.classList.add('correct');
      }

      // reveal correct answer and explanation
      const correctDiv = content.querySelector('.correct-answer');
      const expl = content.querySelector('.explanation');
      if (correctDiv) correctDiv.style.display = 'block';
      if (expl) expl.style.display = 'block';
    }
  });

  // collapse all initially
  elAll('.accordion-content').forEach(c => c.style.display = 'none');
})();

/* ===================== TIMER MODULE (robust) ===================== */
(() => {
  const timerDiv = document.getElementById('timer') || document.querySelector('.timer');
  let _intervalId = null;
  let _remainingSeconds = 0;

  function pad2(n){ return String(n).padStart(2, '0'); }
  function formatTime(totalSeconds){
    const minutes = Math.floor(Math.max(0, totalSeconds) / 60);
    const seconds = Math.floor(Math.max(0, totalSeconds) % 60);
    return `${pad2(minutes)}:${pad2(seconds)}`;
  }
  function updateDisplay(){
    if (!timerDiv) return;
    timerDiv.textContent = `Time: ${formatTime(_remainingSeconds)}`;
  }
  function _tick(){
    _remainingSeconds = Math.max(0, _remainingSeconds - 1);
    updateDisplay();
    if (_remainingSeconds <= 0){
      stopTimer();
      timerDiv?.dispatchEvent(new CustomEvent('timer-ended', { bubbles: true }));
    }
  }
  function startTimer(totalSeconds){
    stopTimer();
    _remainingSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
    updateDisplay();
    if (_remainingSeconds > 0){
      _intervalId = setInterval(_tick, 1000);
    }
  }
  function pauseTimer(){
    if (_intervalId !== null){ clearInterval(_intervalId); _intervalId = null; }
  }
  function resumeTimer(){
    if (_intervalId === null && _remainingSeconds > 0){ _intervalId = setInterval(_tick, 1000); }
  }
  function stopTimer(){
    if (_intervalId !== null){ clearInterval(_intervalId); _intervalId = null; }
    _remainingSeconds = 0;
    updateDisplay();
  }

  window.appTimer = {
    start: startTimer,
    pause: pauseTimer,
    resume: resumeTimer,
    stop: stopTimer,
    getRemaining: () => _remainingSeconds
  };

  // initialize display
  updateDisplay();
})();

/* ===================== MOBILE MENU TOGGLE (safe) ===================== */
(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!menuToggle || !navLinks) return;
  const setExpanded = (val) => menuToggle.setAttribute('aria-expanded', String(val));
  setExpanded(navLinks.classList.contains('active'));
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isActive = navLinks.classList.contains('active');
    setExpanded(isActive);
    if (isActive){
      const first = navLinks.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
      if (first) first.focus();
    }
  });
})();

/* ===================== OPTIONAL: expose utility to toggle all collapsed/expand ===================== */
window.quizUI = {
  expandAll: () => elAll('.accordion-content').forEach(c => { c.style.display = 'block'; const hdr = c.previousElementSibling; if (hdr) hdr.setAttribute('aria-expanded','true'); c.setAttribute('aria-hidden','false'); }),
  collapseAll: () => elAll('.accordion-content').forEach(c => { c.style.display = 'none'; const hdr = c.previousElementSibling; if (hdr) hdr.setAttribute('aria-expanded','false'); c.setAttribute('aria-hidden','true'); })
};
