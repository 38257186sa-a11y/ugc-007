// ==== Data Setup ====

// Years available
const years = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];

// Sample questions data (add more for each year)
const questionsData = {
    2015:  { id: 1, question: "Who is conventionally referred to as the 'father of Political Science' because of the systematic treatment of constitutions in his work 'Politics'?", options: ["Plato", "Aristotle", "Machiavelli", "Socrates"], answer: 1, explanation: "Aristotle (384–322 BCE) treats constitutions empirically and comparatively in Politics, classifying regimes and analysing polity stability—hence the epithet." },

  { id: 2, question: "Which conception of 'liberty' emphasises absence of external constraints and is foregrounded in liberal negative-rights traditions?", options: ["Positive liberty", "Negative liberty", "Republican liberty", "Participatory liberty"], answer: 1, explanation: "Negative liberty (Isaiah Berlin) denotes freedom from interference; it contrasts with positive or republican conceptions that emphasise capacity or non-domination." },

  { id: 3, question: "Rousseau's 'general will' (volonté générale) is best described as which of the following in normative terms?", options: ["Aggregate of private preferences", "Collective will oriented to common good", "Legislative majority will", "A sovereign's decree"], answer: 1, explanation: "Rousseau distinguishes general will from private wills; it expresses the common good that transcends particular interests and legitimates political authority." },

  { id: 4, question: "Which theorist formulated the idea that the modern sovereign state possesses a monopoly on legitimate physical force within a territory?", options: ["Jean Bodin", "Max Weber", "Thomas Hobbes", "John Austin"], answer: 1, explanation: "Max Weber's classic definition of the state is based on its claim to the monopoly of the legitimate use of physical force within a given territory." },

  { id: 5, question: "In Marxian theory, the phrase 'the state will wither away' is associated with which stage of socio-economic development?", options: ["Feudal society", "Socialist transition", "Communist society", "Capitalist imperialism"], answer: 2, explanation: "Marx and Engels envisaged that once class antagonisms disappear under communism, the coercive apparatus of the state would become redundant and 'wither away'." },

  { id: 6, question: "John Rawls' 'veil of ignorance' is an instrument in which theoretical procedure?", options: ["Historical materialist analysis", "Deliberative bargaining", "Original position for choosing principles of justice", "Procedural utilitarian aggregation"], answer: 2, explanation: "Rawls's original position—behind a veil of ignorance—ensures impartial choice of justice principles by removing knowledge of one's social position." },

  { id: 7, question: "Which thinker argued that bureaucratic rationalisation generates an 'iron cage' of instrumental rationality?", options: ["Max Weber", "Emile Durkheim", "Robert Michels", "Gaetano Mosca"], answer: 0, explanation: "Weber described modernity's bureaucratic rationalisation producing constraints on individual autonomy—termed the 'iron cage' of rationalisation." },

  { id: 8, question: "Gramsci's concept of 'hegemony' primarily refers to which mechanism of class domination?", options: ["Pure economic coercion", "Cultural/ideological consent and leadership", "Legal injunctions alone", "State administrative inertia"], answer: 1, explanation: "For Gramsci, hegemony is the leadership exercised through civil society and culture, where consent secures domination alongside coercion." },

  { id: 9, question: "Which philosopher posed the distinction between ancient (collective participation) and modern (individual rights) liberty in 1819?", options: ["Benjamin Constant", "Alexis de Tocqueville", "Isaiah Berlin", "John Stuart Mill"], answer: 0, explanation: "In his lecture 'The Liberty of the Ancients Compared with that of the Moderns', Constant contrasted direct civic participation with modern individual liberties." },

  { id: 10, question: "Which normative doctrine contends that civil disobedience is justified when laws are systematically unjust and when non-violent protest aims at corrective moral pedagogy?", options: ["Thomistic legalism", "Civil libertarianism", "Thoreauvian civil disobedience", "Legal positivism"], answer: 2, explanation: "Thoreau's essay on Civil Disobedience provided the modern model: conscience-driven, non-violent lawbreaking to protest injustice, later invoked by Gandhi and King." },

  { id: 11, question: "Which of the following best captures Robert Nozick's view in 'Anarchy, State, and Utopia' regarding redistributive justice?", options: ["Patterned redistribution via state coercion", "Entitlement theory stressing historical justice and minimal state", "Rawlsian difference principle", "Strict egalitarian collectivism"], answer: 1, explanation: "Nozick defends an entitlement theory: holdings are just if acquired and transferred fairly; a minimal state is justified but patterned redistribution is rejected." },

  { id: 12, question: "The 'Iron Law of Oligarchy' claims that democratic organisations inevitably produce oligarchic leadership. Who formulated this thesis?", options: ["Vilfredo Pareto", "Gaetano Mosca", "Robert Michels", "C. Wright Mills"], answer: 2, explanation: "Michels argued (in Political Parties) that organisational complexity and leadership specialisation give rise to oligarchy even in democratic movements." },

  { id: 13, question: "Which approach in Comparative Politics emphasises institutions, rules, and formal constraints as primary determinants of political outcomes?", options: ["Political culture approach", "Marxist structuralism", "Institutionalism (new/old)", "Behaviouralism"], answer: 2, explanation: "Institutionalism analyses how formal and informal rules and organisations shape incentives and constrain actors—central to comparative institutional analysis." },

  { id: 14, question: "Which of the following is the most precise definition of 'political culture' according to Almond and Verba?", options: ["Economic distribution patterns", "Mass communication flows", "Set of attitudes, beliefs and sentiments giving order and meaning to politics", "Legal codes and constitutions"], answer: 2, explanation: "Almond and Verba's 'civic culture' frames political culture as shared orientations toward politics that condition behaviour and institutional effectiveness." },

  { id: 15, question: "Who argued that modern industrial societies undergo the 'end of ideology', where grand ideological battles subside in favour of pragmatic administration?", options: ["Daniel Bell", "Samuel Huntington", "Francis Fukuyama", "Seymour Martin Lipset"], answer: 0, explanation: "Daniel Bell's 'End of Ideology' suggested Western politics would become technocratic and managerial after WWII, though later debate contested the thesis." },

  { id: 16, question: "Which theory in International Relations argues that democratic states are less likely to go to war with each other?", options: ["Realism", "Democratic Peace Theory", "Constructivism", "Dependency theory"], answer: 1, explanation: "Democratic Peace Theory posits that democracies rarely fight each other, explained via institutional checks, norms, and audience costs." },

  { id: 17, question: "The constitutional principle of 'separation of powers' was systematically elaborated by which thinker?", options: ["John Locke", "Charles de Montesquieu", "James Madison", "Alexander Hamilton"], answer: 1, explanation: "Montesquieu's 'Spirit of the Laws' advocates dividing state powers among branches to protect liberty and prevent despotism." },

  { id: 18, question: "Which Marxist theorist developed a structuralist theory of ideology emphasising ISA (Ideological State Apparatuses)?", options: ["Antonio Gramsci", "Louis Althusser", "Georg Lukács", "Rosa Luxemburg"], answer: 1, explanation: "Althusser's concept of Ideological State Apparatuses (schools, churches, media) explains reproduction of ideology and hegemony." },

  { id: 19, question: "In a federal constitution, which principle best distinguishes a 'dual federalism' model from a 'cooperative federalism' model?", options: ["Shared sovereignty", "Overlapping functions and joint administration", "Clear allocation and separable spheres of power", "Unitary central control"], answer: 2, explanation: "Dual federalism posits distinct, non-overlapping jurisdictions for central and subnational units, unlike cooperative models with shared responsibilities." },

  { id: 20, question: "Who proposed the 'two concepts of liberty' (positive and negative) in the mid-20th century?", options: ["Isaiah Berlin", "T. H. Green", "John Rawls", "Benjamin Constant"], answer: 0, explanation: "Isaiah Berlin's 1958 essay contrasted negative liberty (non-interference) with positive liberty (self-mastery or self-determination)." },

  { id: 21, question: "Which philosopher called property 'theft' and significantly influenced anarchist thought?", options: ["Mikhail Bakunin", "Pierre-Joseph Proudhon", "Peter Kropotkin", "Karl Marx"], answer: 1, explanation: "Proudhon famously declared 'Property is theft' in his critique of proprietarian social relations, foundational to anarchist theory." },

  { id: 22, question: "Which normative theory holds that just institutions maximise welfare (utility) for the greatest number?", options: ["Rawlsian justice", "Deontological ethics", "Utilitarianism", "Libertarianism"], answer: 2, explanation: "Utilitarianism (Bentham, Mill) judges actions/institutions by aggregate welfare or utility maximisation." },

  { id: 23, question: "Which methodological approach emphasises statistical analysis of mass political behaviour and value-laden survey instruments?", options: ["Comparative historical method", "Behaviouralism", "Structural functionalism", "Political anthropology"], answer: 1, explanation: "Behaviouralism focuses on empirically measurable individual behaviour and uses surveys and statistical techniques." },

  { id: 24, question: "Which school emphasises the centrality of norms, identities and discourse in shaping state behaviour in IR?", options: ["Realism", "Neo-liberal institutionalism", "Constructivism", "Marxism"], answer: 2, explanation: "Constructivism foregrounds social construction: norms and identity define interests and state actions, not just material capabilities." },

  { id: 25, question: "The doctrine that 'law is what the sovereign commands' is associated with which jurist/philosopher?", options: ["H. L. A. Hart", "John Austin", "Lon L. Fuller", "Ronald Dworkin"], answer: 1, explanation: "John Austin's legal positivism defined law as commands backed by sanctions issued by a sovereign." },

  { id: 26, question: "Which Indian political thinker and leader advanced the model of non-violent civil resistance adapted from Thoreau and developed for mass anti-colonial struggle?", options: ["Subhas Chandra Bose", "B. R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru"], answer: 2, explanation: "Gandhi developed Satyagraha: mass, non-violent civil resistance grounded in moral force and self-suffering." },

  { id: 27, question: "Which concept describes a polity in which legislative, executive and judicial powers are fused or heavily overlapping due to weak institutional checks?", options: ["Constitutionalism", "Responsible government", "Concentrated power or executive dominance", "Polyarchy"], answer: 2, explanation: "Executive dominance or concentration arises where checks and balances are weak, causing institutional overlap and diminished separation." },

  { id: 28, question: "Which thinker emphasised 'civil society' as a sphere mediating between family and state and as a site of democratic practice?", options: ["Hannah Arendt", "Alexis de Tocqueville", "Jürgen Habermas", "Antonio Gramsci"], answer: 1, explanation: "Tocqueville highlighted associations and civic norms within civil society as foundations of democracy; later thinkers (Habermas, Gramsci) expanded the analytic." },

  { id: 29, question: "Which of the following best expresses the key claim of structural functionalism in comparative politics?", options: ["Historical material conditions solely determine politics", "Institutions perform necessary functions to maintain system equilibrium", "Culture is irrelevant", "Individual agency always trumps structure"], answer: 1, explanation: "Structural functionalism analyses how political institutions perform system-maintaining functions; critics point to circular functional explanations." },

  { id: 30, question: "Which major 20th-century work famously critiqued totalitarianism in the contexts of Nazism and Stalinism, coining enduring analytic categories?", options: ["Hannah Arendt — The Origins of Totalitarianism", "Karl Popper — The Open Society", "Antonio Gramsci — Prison Notebooks", "Claude Lefort — The Modern Prince"], answer: 0, explanation: "Arendt's 'The Origins of Totalitarianism' traced ideological, social, and administrative conditions enabling totalitarian rule." },

  { id: 31, question: "Which theorist advanced the normative project of 'discourse ethics' and emphasised ideal speech situations in ethical justification?", options: ["Jürgen Habermas", "John Rawls", "Michel Foucault", "Charles Taylor"], answer: 0, explanation: "Habermas argued that norms gain legitimacy through rational discourse in an undistorted communicative process—discourse ethics." },

  { id: 32, question: "Which concept best captures Foucault's analysis of modern power as diffuse, disciplinary, and productive rather than merely repressive?", options: ["Sovereignty", "Discipline and biopower", "Legal positivism", "Hegemony"], answer: 1, explanation: "Foucault described modern power through institutions and techniques of discipline and later 'biopower' that regulate populations." },

  { id: 33, question: "Which approach in political theory emphasises context, community, and embeddedness criticizing liberal individualism (exemplified by Michael Sandel)?", options: ["Communitarianism", "Libertarianism", "Rawlsian liberalism", "Utilitarianism"], answer: 0, explanation: "Communitarians argue moral and political theory must account for communal ties and social practices shaping persons." },

  { id: 34, question: "Which of the following best exemplifies 'path dependency' as used in comparative institutional analysis?", options: ["Random institutional change", "Sequential choices making reversal costly and institutions persistent", "Instant reform success", "Culture independent of history"], answer: 1, explanation: "Path dependency posits that initial institutional choices create trajectories and lock-in effects that shape subsequent politics." },

  { id: 35, question: "Which author is associated with the conceptual critique that politics is increasingly 'post-ideological'—a thesis he later revised in light of resurgent ideologies?", options: ["Daniel Bell", "Francis Fukuyama", "Samuel Huntington", "Roger Scruton"], answer: 0, explanation: "Daniel Bell argued the 'end of ideology' for mid-20th century Western politics, a contested claim in later decades." },

  { id: 36, question: "Which of the following is an accurate statement of the 'collective action problem' in political economy?", options: ["Individuals always contribute to public goods", "Rational individuals may free-ride on public goods leading to underprovision", "Collective goods require no coordination", "Private goods are nonrival"], answer: 1, explanation: "Olson's logic shows rational actors may not contribute to collective goods due to incentives to free-ride, necessitating institutions or selective incentives." },

  { id: 37, question: "Which normative stance holds that the state's legitimacy is derived wholly from an original social contract among individuals?", options: ["Divine right theory", "Empirical pluralism", "Classical social contract theory (e.g., Locke/Hobbes/Rousseau)", "Marxist base-superstructure account"], answer: 2, explanation: "Social contract thinkers derive legitimacy from hypothetical consent of individuals to form political society under agreed rules." },

  { id: 38, question: "Which of these conceptual pairs best maps onto 'input' and 'output' legitimacy in democratic theory?", options: ["Participation/Policy performance", "Rule of law/Separation of powers", "Civil society/Private sphere", "Electoral turnout/Civic education"], answer: 0, explanation: "Input legitimacy hinges on participation and consent; output legitimacy emphasises effective policy and problem solving." },

  { id: 39, question: "Who introduced the notion of 'security dilemma' in the discipline of International Relations (describing how one state's security measures can threaten another)?", options: ["Kenneth Waltz", "Thomas Hobbes", "Herbert Butterfield", "John Herz (and J. H. Herz is often credited)"], answer: 3, explanation: "John H. Herz (and earlier realist authors) articulated the security dilemma: measures to enhance security can provoke insecurity." },

  { id: 40, question: "Which doctrine in constitutional theory posits that a constitution must be judged by its capacity to protect fundamental rights and not merely by procedural legality?", options: ["Procedural positivism", "Substantive constitutionalism", "Parliamentary sovereignty", "Legal instrumentalism"], answer: 1, explanation: "Substantive constitutionalism asserts constitutions embody material principles—e.g., rights and values—beyond formal procedures." },

  { id: 41, question: "Which Indian constitutional principle restricts state power by enumerating fundamental rights that can be judicially enforced?", options: ["Directive Principles of State Policy", "Fundamental Rights under Part III", "Preamble", "Union List"], answer: 1, explanation: "Part III of the Indian Constitution lists Fundamental Rights enforceable by courts, serving as limits on state action." },

  { id: 42, question: "Which of the following scholars is best known for foundational work in elite theory emphasising the inevitability of rule by the few (elite circulation, Pareto—Mosca—Michels tradition)?", options: ["Robert Dahl", "Gaetano Mosca", "Theda Skocpol", "Samuel Huntington"], answer: 1, explanation: "Gaetano Mosca argued in 'The Ruling Class' that political rule is exercised by an organised minority (elite) who make decisions for the masses." },

  { id: 43, question: "Which research design emphasises case comparisons to isolate causal mechanisms historically and contextually (often using small-n comparisons)?", options: ["Large-N regression", "Comparative historical analysis", "Survey experiments", "Game theory"], answer: 1, explanation: "Comparative historical analysis uses structured, often small-n, comparisons tracing causal mechanisms across cases and time." },

  { id: 44, question: "In deliberative democratic theory, which condition is central for legitimacy of collective decisions?", options: ["Aggregative voting alone", "Inclusive, rational discourse among affected parties", "Elite bargaining in closed sessions", "Majority rule without justification"], answer: 1, explanation: "Deliberative democrats emphasise public reason, inclusiveness, and reciprocity in deliberation as the source of legitimacy." },

  { id: 45, question: "Which theoretical strand in IR stresses material capabilities, anarchy, and balance of power as core explanatory variables?", options: ["Constructivism", "Liberal institutionalism", "Realism/Neorealism", "Critical theory"], answer: 2, explanation: "Realist theories (and Waltz’s neorealism) focus on power distribution and systemic constraints under anarchy to explain state behaviour." },

  { id: 46, question: "Which concept in comparative politics refers to the extent to which citizens accept and value the existing political order, thereby stabilising polity?", options: ["Legitimacy", "Clientelism", "Patronage", "Favouritism"], answer: 0, explanation: "Legitimacy denotes normative acceptance by citizens that political authority is rightful, contributing to regime stability." },

  { id: 47, question: "Which thinker is associated with public choice theory that applies economic rationality to political actors and institutions?", options: ["James Buchanan", "John Rawls", "Hannah Arendt", "Jürgen Habermas"], answer: 0, explanation: "James Buchanan helped found public choice theory applying microeconomic analysis to political behaviour, focusing on incentives and rent-seeking." },

  { id: 48, question: "Which of these is an example of an 'informal institution' that shapes political behaviour beyond formal constitutional rules?", options: ["Written constitution", "Electoral law", "Clientelist networks and patronage norms", "Statutory code"], answer: 2, explanation: "Informal institutions—norms, patronage practices—shape actual political practices though not codified in law." },

  { id: 49, question: "Which argument best captures the 'resource curse' thesis in political economy?", options: ["Resources always foster democracy", "Abundant natural resources can entrench authoritarianism and corruption", "Resource wealth automatically increases human development", "Resources reduce state power"], answer: 1, explanation: "The resource curse argues that rentier economies reliant on resource rents face weaker institutions, corruption, and less democratic accountability." },

  { id: 50, question: "Which method is most appropriate when seeking to establish causal impact with random assignment and internal validity?", options: ["Small-n comparative historical", "Randomised controlled trial (experiment)", "Ethnographic participant observation", "Process tracing"], answer: 1, explanation: "Randomised controlled trials (where feasible) are the benchmark for causal inference because of random assignment and internal validity." },

  { id: 51, question: "Which of the following best captures the normative core of republican conceptions of freedom (resurgent in modern political theory)?", options: ["Non-interference only", "Non-domination—freedom from arbitrary interference", "Positive capacity only", "Freedom as consumer choice"], answer: 1, explanation: "Republican liberty (Pettit, Skinner) emphasises non-domination—absence of arbitrary power—even if interference could be occasional." },

  { id: 52, question: "Which author argued that modern liberal democratic institutions require an independent judiciary to protect minorities against majoritarian excesses?", options: ["Tocqueville", "John Stuart Mill", "Alexis de Tocqueville", "Jürgen Habermas"], answer: 2, explanation: "Tocqueville highlighted institutional protections (including judiciary) and civic associations to mitigate majority tyranny; Mill also warned about tyranny of majority." },

  { id: 53, question: "Which political economic framework analyses class relations, production mode, and distribution as core determinants of political structure?", options: ["Rational choice institutionalism", "Marxist historical materialism", "Behaviouralism", "Post-structuralism"], answer: 1, explanation: "Marxist historical materialism prioritises mode of production and class relations in shaping political and social structures." },

  { id: 54, question: "Which concept in comparative politics refers to stable, mutually supporting relations among political institutions and social groups?", options: ["Political instability", "Consensus democracy", "Corporatism", "Fragmentation"], answer: 2, explanation: "Corporatism organises interest representation via structured inclusion of groups (peak organisations) in policy formation, promoting negotiated governance." },

  { id: 55, question: "Which of the following best characterises Max Weber’s ideal type of charismatic authority?", options: ["Authority based on legal rules and offices", "Traditional, priestly rule", "Authority based on devotion to exceptional sanctity or heroism of a leader", "Modern bureaucratic authority"], answer: 2, explanation: "Charismatic authority relies on followers' belief in extraordinary personal qualities of a leader, distinct from legal-rational or traditional authority." },

  { id: 56, question: "Which strand in political thought argues that rights should be prioritized irrespective of consequences (a deontological stance)?", options: ["Utilitarianism", "Kantian/deontological ethics", "Consequentialism", "Ethical egoism"], answer: 1, explanation: "Kantian ethics emphasises duties and universalizable maxims, underpinning deontological human rights discourse independent of utility calculus." },

  { id: 57, question: "Which of the following is a major critique of behaviouralism from post-behavioural or normative scholars?", options: ["It overemphasises normative theory", "It ignores empirical analysis", "It reduces normative questions to quantifiable behaviour and neglects values", "It focused too much on institutions"], answer: 2, explanation: "Post-behaviouralists argued behaviouralism's focus on measurement sidelined normative concerns about justice, meaning and values in politics." },

  { id: 58, question: "Which theory asserts that international institutions and regimes can mitigate anarchy and facilitate cooperation by reducing transaction costs and providing information?", options: ["Constructivism", "Realism", "Neoliberal institutionalism", "Classical realism"], answer: 2, explanation: "Neoliberal institutionalists argue institutions facilitate cooperation even under anarchy through repetition, norms, and information." },

  { id: 59, question: "Which major Indian political thinker strongly advocated for constitutional safeguards and minority rights while also critiquing majoritarian democracy?", options: ["Bal Gangadhar Tilak", "B.R. Ambedkar", "Vinoba Bhave", "M. K. Gandhi"], answer: 1, explanation: "Ambedkar emphasised legal safeguards, social justice, and structural reforms to protect marginalised groups and constitutionalism." },

  { id: 60, question: "Which concept refers to the state's use of welfare, patronage and jobs to create clientelist bonds and political support?", options: ["Clientelism", "Pluralism", "Liberalism", "Federalism"], answer: 0, explanation: "Clientelism ties citizens to politicians via targeted material benefits (jobs, transfers) in exchange for political support." },

  { id: 61, question: "Which approach most directly critiques liberal universalism by foregrounding difference, power relations, and discursive construction of subjects?", options: ["Communitarianism", "Postcolonial and poststructuralist critique", "Classical liberalism", "Utilitarianism"], answer: 1, explanation: "Postcolonial and poststructuralist critiques interrogate universal claims, exposing how knowledge/power constructs subjectivities and hierarchies." },

  { id: 62, question: "Which index measures levels of democracy by aggregating electoral, civil and political liberties and is used in comparative research?", options: ["GDP per capita", "Polity IV/Polity Score", "Gini coefficient", "Human Development Index"], answer: 1, explanation: "Polity (Polity IV) provides a standard democracy/authority measure; other indices like Freedom House and V-Dem complement comparative analysis." },

  { id: 63, question: "Which doctrine posits that constitutional amendment powers must not be used to destroy the basic structure of a constitution (India's judicial doctrine)?", options: ["Doctrine of parliamentary sovereignty", "Doctrine of basic structure", "Living constitution approach", "Originalism"], answer: 1, explanation: "India's Supreme Court in Kesavananda Bharati (1973) held Parliament cannot abrogate the Constitution's basic structure—the 'basic structure' doctrine." },

  { id: 64, question: "Which type of federal arrangement allows asymmetric powers where some constituent units have more autonomy than others?", options: ["Symmetric federalism", "Confederalism", "Asymmetric federalism", "Unitary state"], answer: 2, explanation: "Asymmetric federalism grants differentiated competencies to particular subnational units (e.g., special status regions) within a federal framework." },

  { id: 65, question: "Who advanced the critique of rights as 'bourgeois abstractions' in certain Marxist critiques and emphasised class context for rights?", options: ["Karl Marx (and Marxist critics)", "John Locke", "Thomas Paine", "Ronald Dworkin"], answer: 0, explanation: "Marxist critiques view formal rights as operating within class contexts and possibly masking material inequalities." },

  { id: 66, question: "Which theory of development emphasises integration into world markets producing peripheral dependency and underdevelopment?", options: ["Modernisation theory", "Dependency theory", "Neoclassical growth", "State-led developmentalism"], answer: 1, explanation: "Dependency theory argues that peripheral integration into global capitalist markets reproduces dependency and constrains autonomous development." },

  { id: 67, question: "In the typology of party systems, which classification describes two large parties alternately occupying government and opposition (e.g., US model)?", options: ["One-party system", "Multiparty fragmented system", "Two-party system", "Dominant party system"], answer: 2, explanation: "Two-party systems are characterised by competition primarily between two major parties, though minor parties exist." },

  { id: 68, question: "Which methodological tool is most associated with establishing process-level causal mechanisms within a single case?", options: ["Large-N regression", "Process tracing", "Cross-sectional survey", "Cluster analysis"], answer: 1, explanation: "Process tracing disaggregates within-case causal processes via evidence that links cause and effect." },

  { id: 69, question: "Which scholar is most closely associated with the 'end of history' thesis suggesting liberal democracy as final ideological form (later much debated)?", options: ["Francis Fukuyama", "Samuel Huntington", "John Rawls", "Daniel Bell"], answer: 0, explanation: "Fukuyama's controversial 'End of History' argued liberal democracy had triumphed ideologically after Cold War—subject to critique and debate." },

  { id: 70, question: "Which normative approach in IR focuses on human security and cross-border normative obligations beyond state security?", options: ["Classical realism", "Liberal nationalism", "Human security and cosmopolitanism", "Neorealism"], answer: 2, explanation: "Human security shifts the referent object from state to individuals, emphasising rights, development, and transnational protection." },

  { id: 71, question: "The concept of 'delegative democracy' best characterises polities where elected executives govern with weak horizontal accountability; who proposed this category?", options: ["Juan Linz", "Robert Dahl", "Almond and Verba", "Seymour Martin Lipset"], answer: 0, explanation: "Linz characterised delegative democracies as regimes where executives claim broad mandates and institutional constraints are weak." },

  { id: 72, question: "Which model explains voter choice by psychological attachment to parties transmitted across generations?", options: ["Sociological model (Columbia school) and party identification", "Rational choice economic model", "Median voter theorem", "Spatial model"], answer: 0, explanation: "Columbia school emphasised social networks and long-term partisan attachments driving voter behaviour." },

  { id: 73, question: "Which of the following best captures the analytic thrust of 'state capture' as a form of political corruption?", options: ["Minor administrative bribery", "Systemic influence by private actors shaping policy and law for private gain", "Bureaucratic inefficiency only", "Electoral fraud only"], answer: 1, explanation: "State capture denotes private interests shaping state policies, regulations, and institutions for private benefits, undermining public good." },

  { id: 74, question: "Which principle central to parliamentary democracy requires that the executive be accountable to the legislature and retain its confidence?", options: ["Judicial review", "Separation of identity", "Collective responsibility and confidence principle", "Federal supremacy"], answer: 2, explanation: "Parliamentary systems feature collective ministerial responsibility requiring the executive to maintain parliamentary confidence." },

  { id: 75, question: "Which major work by Karl Marx analyses the capitalist mode of production, commodity fetishism and exploitation (labour theory of value)?", options: ["The Communist Manifesto", "Capital (Das Kapital)", "German Ideology", "Critique of the Gotha Programme"], answer: 1, explanation: "Marx's 'Capital' elaborates commodity production, surplus value, and mechanisms of capitalist accumulation and exploitation." },

  { id: 76, question: "Which of the following is a characteristic critique of multiculturalism from liberal critics?", options: ["Underestimates cultural differences", "Overemphasises state power", "Potentially tolerates illiberal practices and threatens individual rights", "Ignores minority representation"], answer: 2, explanation: "Liberal critiques caution that group rights under multiculturalism may shield illiberal practices, raising tensions with universal individual rights." },

  { id: 77, question: "Which key IR thinker is associated with the liberal institutionalist argument that repeated interaction and regimes can reduce incentives for cheating and facilitate cooperation?", options: ["Kenneth Waltz", "Robert Keohane", "Hans Morgenthau", "E. H. Carr"], answer: 1, explanation: "Robert Keohane argued institutions provide information, reduce transaction costs and create incentives for cooperation in anarchy." },

  { id: 78, question: "Which democratic theory emphasises competitive elections, civil liberties and rule of law as the essential minimal conditions for democracy?", options: ["Deliberative democracy", "Participatory democracy", "Minimalist/Procedural democracy (Schumpeterian)", "Radical democracy"], answer: 2, explanation: "Procedural/minimalist theories (e.g., Schumpeter) define democracy mainly by institutional procedures: elections and competition." },

  { id: 79, question: "Which concept denotes the deliberate mobilisation of social identities—ethnicity, religion—by political entrepreneurs for electoral advantage?", options: ["Social capital", "Identity politics and ethnic mobilisation", "Deliberative engagement", "Technocratic governance"], answer: 1, explanation: "Ethnic mobilisation refers to political entrepreneurs activating identities to build electoral support, sometimes provoking conflict." },

  { id: 80, question: "Which constitutional mechanism enables courts to invalidate legislation inconsistent with the constitution?", options: ["Parliamentary supremacy", "Judicial review", "Ordinance power", "Preamble invocation"], answer: 1, explanation: "Judicial review is the power of courts to interpret the constitution and strike down incompatible laws—central to many constitutional orders." },

  { id: 81, question: "Which strand of feminist political theory emphasises structures of domination and calls for transformation of public/private hierarchies (e.g., patriarchy critique)?", options: ["Liberal feminism", "Radical feminism", "Conservative feminism", "Postmodern feminism"], answer: 1, explanation: "Radical feminism targets deep structural and symbolic systems (patriarchy) reproducing gender inequality, advocating structural transformation." },

  { id: 82, question: "Which methodological principle emphasises replication and transparency in quantitative political science research to ensure trustworthy inference?", options: ["Hermeneutic opacity", "Methodological nationalism", "Open science, replication and pre-registration", "Analytic induction only"], answer: 2, explanation: "Open science practices (data/code sharing, replication) strengthen reliability and transparency of empirical political research." },

  { id: 83, question: "Which political theorist is associated with the idea that threats to liberty today are rooted in domination and dependence rather than just overt interference?", options: ["Isaiah Berlin", "Philip Pettit", "John Stuart Mill", "Benjamin Constant"], answer: 1, explanation: "Philip Pettit develops republican liberty as non-domination, focusing on arbitrariness and dependence rather than mere interference." },

  { id: 84, question: "Which political economy variant emphasises state capacity, bureaucratic autonomy and developmental coalitions to explain economic takeoff (e.g., East Asian miracle)?", options: ["Weak state model", "Developmental state thesis", "Resource curse model", "Dependency theory"], answer: 1, explanation: "Developmental state literature highlights effective bureaucracies and state-business coordination as drivers of rapid development in East Asia." },

  { id: 85, question: "Which normative model of justice prioritises compensatory measures to correct for historical injustices and group-based inequalities?", options: ["Strict egalitarianism", "Meritocracy", "Corrective/ restorative justice and affirmative action frameworks", "Libertarian entitlement theory"], answer: 2, explanation: "Affirmative action and restorative justice seek to redress structural historical inequalities through compensatory policies." },

  { id: 86, question: "Which concept refers to the concentration of economic and political power in few hands and its implications for democratic accountability (as analysed by C. Wright Mills)?", options: ["Pluralism", "Power elite", "Polyarchy", "Fragmented power"], answer: 1, explanation: "C. Wright Mills' 'power elite' thesis argues a small managerial/ruling class holds concentrated political and economic power, shaping policy." },

  { id: 87, question: "Which normative position in international law proposes that certain human rights norms are so fundamental they bind states regardless of consent (jus cogens)?", options: ["Treaty positivism only", "Jus cogens and peremptory norms", "State consent principle only", "Non-intervention absolutism"], answer: 1, explanation: "Jus cogens denotes peremptory norms (e.g., prohibition of genocide) that cannot be derogated by state consent under international law." },

  { id: 88, question: "Which concept refers to the ways media and communication shape political agendas and salience of issues (agenda setting and framing)?", options: ["Institutional design", "Agenda-setting and framing effects", "Fiscal federalism", "Separations of powers"], answer: 1, explanation: "Media influences which issues become politically salient (agenda-setting) and how they are perceived (framing), affecting public opinion and policy." },

  { id: 89, question: "Which theory in comparative politics links state formation to war-making and taxation capacity (e.g., Tilly's argument)?", options: ["Rational choice institutionalism", "Bellicist theory / Tilly's war and state formation", "Cultural determinism", "Dependency theory"], answer: 1, explanation: "Tilly argued that wars stimulated state institutions (taxation, bureaucracy) giving rise to modern state capacities." },

  { id: 90, question: "Which legal philosophy argues that law should be interpreted according to the original intentions or meaning at the time of enactment (originalism)?", options: ["Living constitutionalism", "Originalism", "Pragmatism", "Critical legal studies"], answer: 1, explanation: "Originalism construes constitutional text according to historical meaning; contrasts with living constitutionalism advocating adaptive interpretation." },

  { id: 91, question: "Which model explains the distribution of public goods by patronage exchange and particularistic ties rather than programmatic policy delivery?", options: ["Programmatic party model", "Clientelist/ patronage model", "Social democracy model", "Technocratic governance model"], answer: 1, explanation: "Clientelist models emphasise targeted exchange of benefits for political support, undermining programmatic policy frameworks." },

  { id: 92, question: "Which thinker proposed a pluralist conception of power where multiple competing interest groups balance each other in a democratic polity?", options: ["Robert Dahl", "Antonio Gramsci", "Gaetano Mosca", "Vilfredo Pareto"], answer: 0, explanation: "Dahl's pluralism suggests power is dispersed among competing groups with no single hegemonic elite dominating all domains." },

  { id: 93, question: "Which constitutional principle mandates that government action must follow legal procedures and the law (rule of law), rather than arbitrary discretion?", options: ["Rule of law", "Rule by decree", "Direct democracy", "Political sovereignty"], answer: 0, explanation: "Rule of law requires that state actions be authorised by clear legal rules protecting predictability and rights against arbitrariness." },

  { id: 94, question: "Which political philosopher sharply criticised the idea of the state as inherently benevolent and instead described it as an outcome of conflict and power (e.g., 'state of nature' theorists)?", options: ["Thomas Hobbes", "John Locke", "Friedrich Hayek", "Karl Marx"], answer: 0, explanation: "Hobbes's state of nature motivates the social pact to escape violent competition; other theorists (Locke, Marx) give different accounts of state origins." },

  { id: 95, question: "Which approach to policy analysis emphasises evidence, pilot testing and iterative evaluation often associated with technocratic governance?", options: ["Advocacy coalition framework", "Evidence-based policy and experimentalism", "Public choice only", "Critical legal studies"], answer: 1, explanation: "Evidence-based policy stresses rigorous empirical testing (including pilots, RCTs) to inform scalable policy decisions." },

  { id: 96, question: "Which normative theory posits that distributive justice should be organised by a difference principle favouring the least advantaged (Rawlsian)?", options: ["Utilitarianism", "Libertarianism", "Rawlsian justice as fairness (difference principle)", "Desert theory"], answer: 2, explanation: "Rawls's difference principle allows inequalities only if they benefit the least advantaged, within fair equality of opportunity." },

  { id: 97, question: "Which of the following best describes the 'tyranny of the majority' problem in liberal thought?", options: ["Judicial overreach", "A majority oppressing minority rights absent institutional constraints", "Economic inefficiency", "Administrative delay"], answer: 1, explanation: "Tocqueville, Mill and others warned that majority rule without rights protections can oppress minorities, necessitating constitutional safeguards." },

  { id: 98, question: "Which research method uses structured questions and representative samples to infer population beliefs and political attitudes?", options: ["Ethnography", "Survey research", "Process tracing", "Discourse analysis"], answer: 1, explanation: "Survey research collects data from representative samples via questionnaires to measure attitudes and infer population parameters." },

  { id: 99, question: "Which concept in international political economy describes the privileging of capital mobility and trade openness, often associated with neoliberal reforms?", options: ["Embedded liberalism", "Neoliberal globalisation", "Import substitution industrialisation", "State socialism"], answer: 1, explanation: "Neoliberal globalisation emphasises deregulation, liberalised trade and capital flows, often reducing state economic intervention." },

  { id: 100, question: "Which constitutional instrument allows the central government to assume direct control over a state's administration in India under Article 356?", options: ["President's Rule", "Ordinance power", "Concurrent List invocation", "Emergency proclamation under Article 352"], answer: 0, explanation: "Article 356 enables central intervention (President's Rule) when state governance fails; its use has been contentious and judicially reviewed." },

  { id: 101, question: "Which philosopher treated justice as proportionate to merit and advocated government by philosopher-kings in the 'Republic'?", options: ["Aristotle", "Plato", "Socrates", "Cicero"], answer: 1, explanation: "Plato advocated rule by philosopher-kings chosen for their wisdom and capacity to apprehend the Forms—an elitist model of just governance." },

  { id: 102, question: "Which of the following best characterises the 'median voter theorem' in electoral competition models?", options: ["Parties converge to policies preferred by the median voter under single-peaked preferences", "Parties always choose extreme policies", "Voters coordinate on multiple equilibria", "Electoral outcomes are random"], answer: 0, explanation: "Under certain conditions (single-peaked preferences, two parties), parties converge towards the median voter's preference to maximise votes." },

  { id: 103, question: "Which political theory emphasises the constitutive role of discourse and power in producing subjectivities and political truths (often associated with genealogical method)?", options: ["Liberalism", "Foucauldian poststructuralism", "Rational choice", "Classical conservatism"], answer: 1, explanation: "Foucault's genealogy analyses how power/knowledge produce regimes of truth and subject positions across institutions." },

  { id: 104, question: "Which of the following best captures the normative concern of communitarian critiques of liberalism?", options: ["Overemphasis on community values", "Neglect of individual community embeddedness", "Economic redistribution only", "Technocratic planning"], answer: 1, explanation: "Communitarians argue liberalism's atomised individualism neglects social and cultural contexts that shape identity and moral judgment." },

  { id: 105, question: "Which concept captures how ethnic groups are mobilised into political coalitions across cleavage structures (e.g., ethnic outbidding vs cross-cutting cleavages)?", options: ["Cross-cutting cleavages reduce conflict; aligned cleavages intensify polarization", "Cleavages are irrelevant", "Electoral systems always prevent polarisation", "Majoritarian systems guarantee inclusiveness"], answer: 0, explanation: "Cross-cutting cleavages mitigate conflict by dividing loyalties; aligned cleavages concentrate grievances and heighten conflict." },

  { id: 106, question: "Which of the following best describes a 'consociational' democracy designed to manage deep societal divisions?", options: ["Majoritarian exclusionary rule", "Power-sharing with grand coalitions, veto rights and segmental autonomy", "Single-party rule", "Federal unitary centralisation"], answer: 1, explanation: "Consociationalism (Lijphart) uses elite accommodation: proportional representation, grand coalitions, segmental autonomy to stabilise divided societies." },

  { id: 107, question: "Which concept addresses the legitimacy of international humanitarian intervention when states are perpetrating gross human rights abuses?", options: ["State sovereignty absolutism", "Responsibility to Protect (R2P)", "Non-intervention principle only", "Balance of power"], answer: 1, explanation: "R2P posits that states have responsibilities to protect citizens; when they fail, the international community may intervene to prevent atrocities." },

  { id: 108, question: "Which theory holds that modern democracies require economic development (modernisation) to sustain democratic institutions and values?", options: ["Modernisation theory", "Dependency theory", "Marxist determinism", "Pluralist theory"], answer: 0, explanation: "Modernisation theorists argue economic development, urbanisation and social complexity foster democratic institutions and culture." },

  { id: 109, question: "Which empirical regularity suggests that incumbency advantage arises from state resources, name recognition and office resources favouring re-election?", options: ["Coattail effect", "Incumbency advantage", "Median voter effect", "Duverger's law"], answer: 1, explanation: "Incumbency advantage explains higher reelection probabilities due to visibility, patronage networks and institutional resources." },

  { id: 110, question: "Which concept denotes the state's capacity to design and implement policy effectively (administrative competence, revenue extraction, rule enforcement)?", options: ["State fragility", "State capacity", "Clientelism", "Informal governance"], answer: 1, explanation: "State capacity refers to bureaucratic, fiscal and coercive abilities enabling governance and policy implementation." },

  { id: 111, question: "Which normative school defends a minimal state limited to protecting negative liberties and property rights (Nozick's view)?", options: ["Libertarianism", "Social democracy", "Communitarianism", "Deliberative democracy"], answer: 0, explanation: "Nozick's libertarian minimal state justifies only narrow functions (protection, enforcement) and rejects redistributive justice." },

  { id: 112, question: "Which mechanism explains how transnational advocacy networks can influence state behaviour via naming, shaming and framing international norms?", options: ["Hard power coercion", "Transnational advocacy and boomerang effect", "Isolationism", "Realist power balancing"], answer: 1, explanation: "Transnational advocacy networks (Keck and Sikkink) use information politics to hold states accountable and promote norm adoption." },

  { id: 113, question: "Which of the following is a central claim of political development literature concerning the relationship between institutionalisation and political stability?", options: ["Institutionalisation undermines legitimacy", "Well-institutionalised structures increase predictability and stability", "Institutionalisation is irrelevant", "Rapid institutional change always stabilises politics"], answer: 1, explanation: "Institutionalisation embeds norms/routines that increase stability, predictability and legitimacy, reducing clientelist volatility." },

  { id: 114, question: "Which model in party politics holds that parties converge to the centre under plurality electoral rules to capture median voter support (Downsian model)?", options: ["Sartori's polarisation model", "Downsian spatial model of party competition", "Group-centric mobilisation", "Elite fragmentation model"], answer: 1, explanation: "Downs posits office-seeking parties locate programmatically to appeal to median voters, especially under single-member plurality systems." },

  { id: 115, question: "Which Indian constitutional provision introduces a 'basic structure' judicial limitation on parliamentary amendment powers (name the case)?", options: ["Golaknath v. State of Punjab", "Kesavananda Bharati v. State of Kerala", "Minerva Mills v. Union of India", "Shankari Prasad v. Union of India"], answer: 1, explanation: "Kesavananda Bharati (1973) articulated the basic structure doctrine; Minerva Mills (1980) reinforced it by protecting judicial review and fundamental rights." },

  { id: 116, question: "Which of the following best describes 'procedural democracy' vs 'substantive democracy' distinction?", options: ["Procedural emphasises procedures (elections); substantive emphasises outcomes (rights, welfare)", "Procedural is about economic measures only", "Substantive only concerns institutions", "They are identical"], answer: 0, explanation: "Procedural democracy focuses on rules and processes (e.g., elections), while substantive democracy assesses outcomes—equality, rights, social justice." },

  { id: 117, question: "Which political thinker argued that rights and the rule of law are crucial bulwarks against arbitrary rule, writing in 'The Spirit of the Laws' or similar works?", options: ["Montesquieu", "Hobbes", "Rousseau", "Bodins"], answer: 0, explanation: "Montesquieu argued for separation of powers and rule of law as mechanisms to check arbitrary power and protect liberty." },

  { id: 118, question: "Which concept in international relations emphasises how shared norms and identities shape state interests over time (constructivist claim)?", options: ["Balance of power", "Constructivist normative socialisation", "Economic determinism", "Realist security competition"], answer: 1, explanation: "Constructivists argue state interests are not fixed but socially constructed through norms, identity and interaction." },

  { id: 119, question: "Which theoretical current critiques hegemonic Western IR theory for reproducing colonial framings and calls for decolonial IR perspectives?", options: ["Neorealism", "Postcolonial and decolonial IR", "Liberal institutionalism", "Functionalism"], answer: 1, explanation: "Postcolonial/decolonial IR interrogates Eurocentric assumptions and seeks plural knowledge and voices in global politics." },

  { id: 120, question: "Which political science concept examines citizen trust in institutions and officials and its correlation with compliance and regime stability?", options: ["Policy feedback", "Political trust and legitimacy", "Elite circulation", "Clientelism"], answer: 1, explanation: "Political trust influences compliance and the perceived legitimacy of institutions, affecting democratic consolidation or erosion." },

  { id: 121, question: "Which of the following best exemplifies 'collective bargaining' as a mechanism of interest representation in corporatist systems?", options: ["Ad hoc protests", "Institutionalised negotiation between state, employers and organised labour", "Patronage distribution", "Clientelist exchange"], answer: 1, explanation: "Corporatist bargaining institutionalises negotiation between key actors (state, unions, employers) for policy coordination." },

  { id: 122, question: "Which theory of state legitimacy emphasises effective delivery of public goods and performance as key to popular support (output legitimacy)?", options: ["Input legitimacy only", "Output legitimacy and performance legitimacy", "Divine right", "Legal positivism"], answer: 1, explanation: "Output legitimacy holds that effective problem-solving and policy performance generate legitimacy aside from participatory input." },

  { id: 123, question: "Which thinker is associated with the critique that liberalism's emphasis on rights may obscure social inequalities and needs for social solidarity (welfare arguments)?", options: ["John Rawls", "Michael Sandel and communitarians", "Robert Nozick", "Milton Friedman"], answer: 1, explanation: "Communitarians like Sandel argued liberal rights language can neglect communal obligations and social goods; welfare liberals press for social solidarity." },

  { id: 124, question: "Which electoral system tends to produce multiparty representation with proportional translation of votes into seats and often coalition governments?", options: ["First-past-the-post (plurality)", "Proportional representation", "Single transferable vote only", "Majoritarian runoff"], answer: 1, explanation: "Proportional representation translates votes to seats more proportionately, often enabling multi-party coalitions." },

  { id: 125, question: "Which concept in political sociology describes the unwritten rules, networks and trust that facilitate collective action (Putnam's usage)?", options: ["Social capital", "Political culture", "Elite theory", "Structural functionalism"], answer: 0, explanation: "Putnam's social capital emphasises norms of reciprocity and networks that enhance civic cooperation and institutional performance." },

  { id: 126, question: "Which approach in normative political theory emphasises procedural fairness and public reason rather than maximising outcomes alone?", options: ["Utilitarianism", "Deliberative democratic theory", "Marxism", "Libertarianism"], answer: 1, explanation: "Deliberative democrats focus on public reasoning, inclusivity and deliberation as legitimating procedures for collective decisions." },

  { id: 127, question: "Which analytical lens examines how ideology, discourse, and culture help legitimate state power and policy preferences, often via media and education?", options: ["Rational choice only", "Discourse analysis and ideological state apparatuses", "Institutionalism only", "Electoral statistics"], answer: 1, explanation: "Discourse and ideological analysis explore how language and institutions (education, media) reproduce legitimating narratives." },

  { id: 128, question: "Which of the following is an example of an inherent tension in liberal democracies highlighted by critics: balancing majority rule with protection of minority rights?", options: ["No tension exists", "Tension between democratic decision-making and constitutional rights protections", "Tension between private and public sectors", "Tension between fiscal and monetary policy"], answer: 1, explanation: "A central liberal conundrum is reconciling democratic majoritarianism with legal protections for minorities and rights." },

  { id: 129, question: "Which concept in comparative politics indicates that state policies are shaped by historical institutional legacies rather than short-term choices?", options: ["Electoral volatility", "Historical institutionalism and path dependence", "Random drift", "Immediate rational choices"], answer: 1, explanation: "Historical institutionalism emphasises legacies and sequences that constrain present policy options through lock-in effects." },

  { id: 130, question: "Which normative model in global justice argues for egalitarian distribution across borders (cosmopolitan egalitarianism) rather than statist partiality?", options: ["Statist realism", "Cosmopolitan egalitarianism", "National utilitarianism", "Mercantilism"], answer: 1, explanation: "Cosmopolitan egalitarians (Pogge, Singer variants) hold justice obligations transcend national boundaries, demanding distributive measures globally." },

  { id: 131, question: "Which of the following best describes a 'mixed' electoral system that combines single-member district plurality and proportional representation elements (e.g., Germany's system)?", options: ["Pure PR", "Mixed-member proportional (MMP)", "First-past-the-post only", "Block voting"], answer: 1, explanation: "MMP systems use district reps plus party lists to achieve proportionality while retaining constituency representation." },

  { id: 132, question: "Which analytical tradition in IR emphasises the role of class forces and global capitalism in shaping state behaviour and international outcomes?", options: ["Realism", "Marxist and critical theory", "Constructivism", "Neoliberal institutionalism"], answer: 1, explanation: "Marxist/critical IR examines how capitalist relations, dependency and class dynamics structure global politics." },

  { id: 133, question: "Which normative claim underpins humanitarian intervention critics who stress non-consensual interference breaches sovereignty and risks abuse?", options: ["Absolute R2P endorsement", "Non-intervention and state sovereignty primacy", "Universal jurisdiction always", "Balance of power justification"], answer: 1, explanation: "Sovereignty defenders worry about instrumental misuse of humanitarian rhetoric to justify interference that breaches self-determination." },

  { id: 134, question: "Which methodological challenge arises in comparative politics when units (countries) are few and heterogenous and causal inference is difficult?", options: ["Large-N ease", "Small-N inference and external validity problems", "No problems exist", "Statistical overfitting only"], answer: 1, explanation: "Small-N comparative cases complicate statistical inference and generalisability, requiring careful case selection and process tracing." },

  { id: 135, question: "Which of the following best describes 'authoritarian resilience' theories explaining why some autocracies survive and adapt?", options: ["They cannot adapt", "They employ cooptation, repression and performance legitimacy to survive", "They always democratise quickly", "They are purely accidental"], answer: 1, explanation: "Authoritarian regimes may combine repression, cooptation of elites, economic performance and limited reforms to sustain rule." },

  { id: 136, question: "Which doctrine maintains that constitutional interpretation may evolve to reflect contemporary needs and values (living constitution approach)?", options: ["Originalism", "Living constitutionalism", "Textualism only", "Formalism only"], answer: 1, explanation: "Living constitutionalists argue constitutional meaning can adapt over time to social changes and evolving norms." },

  { id: 137, question: "Which policy instrument exemplifies distributive politics in clientelist systems where benefits are given selectively to secure support?", options: ["Universal basic services", "Targeted transfers and patronage hiring", "Open public procurement", "Meritocratic civil service only"], answer: 1, explanation: "Selective transfers and patronage appointments are hallmark tools of clientelist exchange used to secure political loyalty." },

  { id: 138, question: "Which major political scientist developed the 'two-level game' model describing leaders balancing domestic pressures and international negotiation incentives?", options: ["Robert Putnam", "Kenneth Waltz", "Joseph Nye", "Hedley Bull"], answer: 0, explanation: "Putnam's two-level game frames international negotiation as simultaneously constrained by domestic constituencies and international bargaining." },

  { id: 139, question: "Which concept refers to the long-term decline in party identification and the rise of candidate-centred politics and electoral volatility in many democracies?", options: ["Partisan dealignment and dealignment", "Realignment", "Authoritarian consolidation", "Party entrenchment"], answer: 0, explanation: "Dealignment denotes weakening party ties, increased volatility, and personalised or issue-based voting patterns." },

  { id: 140, question: "Which of these best describes the 'principal-agent' problem in delegation studies of representative institutions?", options: ["Perfect alignment of preferences", "Agents may shirk or pursue divergent interests requiring monitoring and incentives", "No need for accountability", "Agents are always benevolent"], answer: 1, explanation: "Principal-agent frameworks examine delegation dilemmas where agents (representatives) may diverge from principals' (citizens') interests absent monitoring." },

  { id: 141, question: "Which of the following doctrines in international law establishes ad hoc tribunals or ICC prosecution for crimes against humanity and genocide?", options: ["Treaty positivism only", "International criminal justice (e.g., ICC, ad hoc tribunals)", "Sovereign immunity absolutism", "Diplomatic reciprocity only"], answer: 1, explanation: "Post-Cold War institutions (ICTY, ICTR, ICC) operationalise international criminal accountability for atrocities." },

  { id: 142, question: "Which theory in comparative politics posits that political institutions interact with social structure; for instance, welfare states reflect coalition politics and class structures (e.g., Esping-Andersen)?", options: ["Rational choice only", "Varieties of Capitalism / welfare regime approaches", "Neorealist IR", "Postcolonialism"], answer: 1, explanation: "Welfare regime typologies (Esping-Andersen) relate institutional designs to historical coalitions and social class configurations." },

  { id: 143, question: "Which analytic distinction separates 'hard law' (binding legal obligations) from 'soft law' (non-binding norms) in international regulation?", options: ["Hard/soft law distinction", "Civil/criminal dichotomy", "Treaty/ordinance difference only", "Domestic/foreign law dichotomy"], answer: 0, explanation: "Hard law creates formal binding obligations; soft law uses guidelines and norms that influence behaviour without legal sanction." },

  { id: 144, question: "Which political thinker warned about bureaucratic rule and championed participatory forms of democracy in essays on civil association and democracy?", options: ["Alexis de Tocqueville", "John Rawls", "Karl Popper", "Robert Dahl"], answer: 0, explanation: "Tocqueville emphasised civic associations as bulwarks of democracy against centralised bureaucracy, though Dahl also elaborated pluralist democratic theory." },

  { id: 145, question: "Which concept best captures the phenomenon where political institutions or elites intentionally limit mass participation to stabilise an authoritarian order while providing limited pluralism (e.g., controlled pluralism)?", options: ["Totalitarianism only", "Competitive authoritarianism/controlled pluralism", "Polyarchy", "No such concept"], answer: 1, explanation: "Competitive authoritarian regimes permit limited pluralism but tilt institutions to favour incumbents, constraining genuine contestation." },

  { id: 146, question: "Which normative approach argues for global institutional reform to redress inequalities through global taxation, redistribution and cosmopolitan governance?", options: ["Statist realism", "Global justice cosmopolitanism", "Isolationist nationalism", "Mercantilism"], answer: 1, explanation: "Cosmopolitan justice advocates institutional changes (global redistribution mechanisms) to address cross-border inequality and injustice." },

  { id: 147, question: "Which analytic concept captures the idea that modern governance increasingly involves non-state actors, private regulators, NGOs and public-private partnerships (governance beyond government)?", options: ["State monopoly", "Governance and multi-level governance", "Unitary centralism", "Hierarchy only"], answer: 1, explanation: "Governance studies focus on networks, multi-level interactions and non-state actors reshaping policy beyond hierarchical state control." },

  { id: 148, question: "Which political economic explanation attributes insurgency and civil war risk to competition over natural resource rents and weak state institutions?", options: ["Democratic peace theory", "Greed vs grievance/resource conflict theories", "Modernisation theory", "Dependency theory"], answer: 1, explanation: "Resource-conflict theories emphasise incentives from resource rents (greed) and grievances from exclusion as drivers of civil war." },

  { id: 149, question: "Which principle in constitutional adjudication instructs courts to interpret provisions in a manner that preserves constitutionality where possible (presumption of constitutionality)?", options: ["Doctrine of severability", "Strong presumption of constitutionality and harmonious construction", "Basic structure invalidation by default", "Majoritarian override"], answer: 1, explanation: "Courts often adopt interpretive rules favouring constitutional validity and harmonising provisions rather than invalidating statutes where possible." },

  { id: 150, question: "Which theoretical instrument in IR helps explain how states internalise international norms and change behaviour through socialisation, persuasion and normative pressure?", options: ["Balance of power only", "Socialisation and norm internalisation (constructivist mechanisms)", "Class struggle only", "Market mechanisms only"], answer: 1, explanation: "Constructivist mechanisms like socialisation and normative persuasion explain norm diffusion and state behaviour change over time." }
];
const paper1_50 = [
  { id: "P1-1", question: "Which of the following best describes the principal aim of research methodology as distinct from research methods?", options: ["Methods are the philosophical basis; methodology is just tools","Methodology concerns the logic and justification of procedures while methods are techniques", "Methodology is identical to methods", "Methodology refers only to data collection"], answer: 1, explanation: "Methodology reflects underlying rationale, epistemology, and justification for chosen methods; methods are the tools/techniques employed." },
  { id: "P1-2", question: "A researcher formulates a hypothesis that higher faculty research output leads to improved institutional ranking. Which variable is the dependent variable?", options: ["Faculty output","Institutional ranking","Both are independent","Neither"], answer: 1, explanation: "Institutional ranking is the dependent variable (outcome); faculty research output is the independent (predictor) variable." },
  { id: "P1-3", question: "Which sampling technique most reduces selection bias while ensuring population representativeness if a complete sampling frame is available?", options: ["Convenience sampling","Simple random sampling","Purposive sampling","Snowball sampling"], answer: 1, explanation: "Simple random sampling gives each unit equal chance, minimising selection bias when a full frame exists." },
  { id: "P1-4", question: "Which of these study designs is best for establishing causal inference when ethical and practical constraints prevent experimental manipulation?", options: ["Randomised controlled trial","Cross-sectional survey","Quasi-experimental design (with matching/time-series)", "Ethnography"], answer: 2, explanation: "Quasi-experimental designs (e.g., difference-in-differences, matching) approximate causal inference when RCTs are infeasible." },
  { id: "P1-5", question: "In teaching, 'constructive alignment' means:", options: ["Aligning classroom furniture","Ensuring learning outcomes, teaching activities and assessment are coherently aligned", "Teaching all topics in alignment with textbook sequence","Aligning faculty schedules"], answer: 1, explanation: "Constructive alignment (Biggs) links intended learning outcomes, teaching/learning activities and assessment tasks coherently." },
  { id: "P1-6", question: "Which index would be most appropriate to summarise dispersion in a skewed income distribution?", options: ["Mean","Standard deviation","Median absolute deviation or interquartile range (IQR)","Mode"], answer: 2, explanation: "IQR or median-based measures are robust to skewness and outliers, better representing dispersion in skewed distributions." },
  { id: "P1-7", question: "Which statement correctly distinguishes validity from reliability in measurement?", options: ["Reliability is truth; validity is consistency","Reliability is consistency of measurement; validity is whether instrument measures what it intends to", "Validity ensures repeated results; reliability ensures correct results","They are synonyms"], answer: 1, explanation: "Reliability concerns reproducibility; validity concerns accuracy (measuring the intended construct)." },
  { id: "P1-8", question: "Which of the following is an example of criterion-related validity?", options: ["Internal consistency of a scale","Correlation of test scores with an external criterion measured at same time or later","Face validity evaluated by experts","Construct validity via factor analysis"], answer: 1, explanation: "Criterion-related validity is demonstrated when instrument scores correlate with a relevant external benchmark or outcome." },
  { id: "P1-9", question: "Which research orientation typically foregrounds contextually rich, interpretive understandings and small purposive samples?", options: ["Positivism","Quantitative experimentalism","Qualitative interpretivism","Behaviouralism"], answer: 2, explanation: "Qualitative interpretive approaches (phenomenology, grounded theory) prioritise depth, meaning and context using purposive small samples." },
  { id: "P1-10", question: "A journal uses double-blind peer review. What does 'double-blind' refer to?", options: ["Editor and reviewer both anonymous to public","Both author and reviewer identities are hidden from each other","Reviewers know authors; authors know reviewers","Only editor identity is hidden"], answer: 1, explanation: "Double-blind means reviewers do not know authors' identity and authors do not know reviewers' identity, promoting impartiality." },
  { id: "P1-11', question: 'Which statistical test is suitable for comparing means across three independent groups with normal distribution and equal variances?", options: ['t-test','ANOVA','Chi-square','Mann-Whitney U'], answer: 1, explanation: 'ANOVA (one-way) compares means across three or more independent groups under parametric assumptions.' },
  { id: "P1-12", question: "Which type of plagiarism occurs when a researcher copies structure and ideas without citation (but paraphrases), thus misrepresenting originality?", options: ["Direct verbatim copying only","Paraphrasing without attribution (mosaic/plagiarism of ideas)","Self-plagiarism only","Data fabrication"], answer: 1, explanation: "Paraphrasing or reworking ideas without attribution is plagiarism of ideas (mosaic) and misrepresents originality." },
  { id: "P1-13", question: "Which of the following best explains peer-reviewed journals' impact factor?", options: ["Number of articles published each year","Average number of citations received per article in preceding years","Total downloads only","Altmetric score"], answer: 1, explanation: "Impact factor is roughly the average citations per citable item over a specified window (commonly two years)." },
  { id: "P1-14", question: "In logic, which fallacy mistakes correlation for causation?", options: ["Ad hominem","Post hoc ergo propter hoc / cum hoc (confusing correlation with causation)","Non sequitur","Begging the question"], answer: 1, explanation: "Post hoc / cum hoc fallacies presume temporal or statistical association implies causal linkage without justification." },
  { id: "P1-15", question: "Which indicator is used to measure income inequality within a country?", options: ["GDP growth rate","Gini coefficient","Human Development Index","Consumer Price Index"], answer: 1, explanation: "Gini coefficient summarises inequality on a 0–1 scale; higher values indicate greater inequality." },
  { id: "P1-16", question: "Which statement about null hypothesis significance testing (NHST) is correct?", options: ["A p-value < 0.05 proves the alternative hypothesis true","p-value indicates probability of observing data given null hypothesis is true (not probability that null is true)", "p-value equals effect size","NHST gives direct probability of hypotheses"], answer: 1, explanation: "p-value = P(data|H0); it is not P(H0|data) and does not equal effect size or clinical importance." },
  { id: "P1-17", question: "Which is the most appropriate measure for central tendency when a dataset contains extreme outliers?", options: ["Mean","Median","Mode","Variance"], answer: 1, explanation: "Median is robust to outliers and better represents central location for skewed distributions." },
  { id: "P1-18", question: "Which among these is not a criterion for experimental design validity?", options: ["Internal validity","External validity","Construct validity","Author's academic rank"], answer: 3, explanation: "Author's rank is irrelevant to experimental validity; internal/external/construct are central validity criteria." },
  { id: "P1-19", question: "Which is an example of an ordinal scale?", options: ["Temperature in Celsius","Likert response: strongly disagree to strongly agree","Number of citations","Income in rupees"], answer: 1, explanation: "Ordinal scales rank order (Likert), but intervals are not necessarily equal." },
  { id: "P1-20", question: "Which metric best summarises a dataset's central spread by focusing on the middle 50%?", options: ["Range","Interquartile range (IQR)","Standard deviation","Variance"], answer: 1, explanation: "IQR = Q3 − Q1 summarizes the middle 50% and is robust to outliers." },
  { id: "P1-21", question: "Research ethics require informed consent. Which component is NOT part of valid informed consent?", options: ["Disclosure of relevant information","Voluntariness","Coercion and undue inducement","Comprehension by participant"], answer: 2, explanation: "Coercion negates valid consent; valid consent requires the absence of coercion and undue inducement." },
  { id: "P1-22", question: "Which of the following is NOT a step in classical hypothesis testing process?", options: ["Formulate null and alternative hypotheses","Select test statistic and significance level","Prove with absolute certainty the alternative hypothesis","Compute p-value and draw inference"], answer: 2, explanation: "Hypothesis testing cannot 'prove' hypotheses with certainty; it assesses evidence against the null." },
  { id: "P1-23", question: "Which digital tool is primarily used for reference management and citation formatting by researchers?", options: ["SPSS","EndNote/Mendeley/Zotero","MATLAB","NVivo"], answer: 1, explanation: "Reference managers (EndNote, Mendeley, Zotero) organise citations and format bibliographies." },
  { id: "P1-24", question: "Which pedagogy emphasises student-centred, activity-based, problem-solving learning rather than passive transmission?", options: ["Lecture-only pedagogy","Constructivist and active learning approaches","Rote memorisation","Dictation-based teaching"], answer: 1, explanation: "Constructivist/active learning involves learners constructing knowledge through activities, discussions and problem-solving." },
  { id: "P1-25", question: "Which approach is appropriate when a researcher wants to explore new constructs and generate theory from data?", options: ["Confirmatory factor analysis","Grounded theory / inductive qualitative methods","Large-scale RCT","Meta-analysis"], answer: 1, explanation: "Grounded theory inductively develops concepts and theory from systematically gathered qualitative data." },
  { id: "P1-26", question: "Which of the following best describes 'content validity'?", options: ["Extent to which a measure covers the full domain of a construct","Correlation with another criterion","Test-retest reliability","Inter-rater reliability"], answer: 0, explanation: "Content validity concerns whether items comprehensively sample the construct's domain (often judged by experts)." },
  { id: "P1-27", question: "If a dataset shows a correlation coefficient r = 0.02 (p < 0.05) in a very large sample (n = 100,000), what is the most prudent interpretation?", options: ["Strong, important relationship","Statistically significant but substantively trivial association","No relationship exists","Causation proven"], answer: 1, explanation: "Large samples can make tiny correlations statistically significant; substantive importance depends on effect size and context." },
  { id: "P1-28", question: "Which of the following algorithmic tools is primarily used for qualitative data coding and thematic analysis?", options: ["SPSS","NVivo/Atlas.ti","R base plotting","STATA"], answer: 1, explanation: "NVivo and Atlas.ti support qualitative coding, memoing and thematic analysis." },
  { id: "P1-29", question: "Which statistical technique reduces dimensionality and identifies latent factors that explain observed covariance among items?", options: ["Chi-square test","Exploratory factor analysis (EFA)","T-test","Logistic regression"], answer: 1, explanation: "EFA uncovers latent constructs explaining covariation among observed variables." },
  { id: "P1-30", question: "Which of the following is the most important peer-review criterion in top indexed journals?", options: ["Affiliation of author only","Methodological rigor, originality, theoretical contribution","Number of pages","Color of figures"], answer: 1, explanation: "High-quality journals prioritise methodological rigor, originality and contribution to knowledge over superficial features." },
  { id: "P1-31", question: "Which of the following best exemplifies a longitudinal study design?", options: ["Cross-sectional single administration survey","Panel study following same individuals over time","One-time experiment","Meta-analysis"], answer: 1, explanation: "Longitudinal/panel designs re-measure the same units across time to study dynamics and causal ordering." },
  { id: "P1-32", question: "Which sampling error decreases as sample size increases, all else equal?", options: ["Systematic bias","Random sampling error (standard error)","Non-sampling error","Measurement bias"], answer: 1, explanation: "Random sampling error (measured by standard error) falls with larger sample sizes; systematic bias may remain." },
  { id: "P1-33", question: "Which statement correctly distinguishes descriptive from inferential statistics?", options: ["Descriptive predict populations; inferential summarise samples","Descriptive summarise data; inferential draw conclusions about populations from samples", "They are identical processes","Inferential uses only graphs"], answer: 1, explanation: "Descriptive statistics describe observed data; inferential methods generalise from sample to population using probability models." },
  { id: "P1-34", question: "Which of the following is a limitation of online surveys that researchers must mitigate?", options: ["High response rates always guaranteed","Coverage bias due to internet access disparities","Guaranteed representativeness","Immunity to measurement error"], answer: 1, explanation: "Online surveys risk coverage bias among populations with unequal internet access; researchers must weigh sampling strategies." },
  { id: "P1-35", question: "Which concept in pedagogy concerns aligning assessment tasks tightly with intended learning outcomes (constructive alignment emphasis)?", options: ["Syllabus length","Assessment for learning and alignment","Administrative formalities only","Decoration"], answer: 1, explanation: "Assessment must measure the intended outcomes (constructive alignment) and support learning (assessment for learning)." },
  { id: "P1-36", question: "In research ethics, which practice ensures participant anonymity even to the researcher team?", options: ["Pseudonymisation or full anonymisation","Sharing identifiable lists openly","Publishing raw names with data","Recording consent only verbally"], answer: 0, explanation: "Anonymisation/pseudonymisation protects identities in datasets; full anonymisation severs identifiers from data." },
  { id: "P1-37", question: "Which of these is NOT a property of a normal distribution?", options: ["Symmetry around mean","Mean = median = mode","Skewness = 0","Always positive values only"], answer: 3, explanation: "Normal distribution can have positive and negative values; not restricted to positive-only domain." },
  { id: "P1-38", question: "Which search strategy component is crucial for systematic literature review reproducibility?", options: ["Subjective selection only","Developing and documenting explicit search strings, databases and inclusion criteria","Only reading abstracts randomly","Not reporting sources"], answer: 1, explanation: "Systematic reviews require documented search strings, databases, dates and inclusion/exclusion criteria for reproducibility." },
  { id: "P1-39", question: "Which of the following best describes 'action research' in pedagogy?", options: ["Research on action movies","Practitioner-led cyclical inquiry to improve practice","Pure theoretical research disconnected from practice","Random experimentation"], answer: 1, explanation: "Action research is iterative practitioner inquiry (plan-act-observe-reflect) aimed at improving educational practice in context." },
  { id: "P1-40", question: "Which probability distribution is appropriate for modelling counts of rare independent events in fixed intervals (e.g., publication counts per week)?", options: ["Normal distribution","Poisson distribution","Uniform distribution","Exponential distribution"], answer: 1, explanation: "Poisson models counts of rare events in fixed intervals under independence and stationarity assumptions." },
  { id: "P1-41", question: "Which type of validity is assessed by whether test items reflect theoretically expected relationships with other constructs (convergent/discriminant)?", options: ["Construct validity","Face validity","Criterion validity only","Temporal validity"], answer: 0, explanation: "Construct validity encompasses relationships with related constructs (convergent) and lack of relation with distinct constructs (discriminant)." },
  { id: "P1-42", question: "Which technique is appropriate to test for association between two categorical variables in a contingency table?", options: ["Pearson correlation","Chi-square test of independence","One-way ANOVA","Linear regression"], answer: 1, explanation: "Chi-square tests whether observed counts deviate from expected frequencies under independence." },
  { id: "P1-43", question: "Which of the following is an example of qualitative data analysis technique?", options: ["Thematic coding","T-test","ANOVA","Regression analysis"], answer: 0, explanation: "Thematic coding organises qualitative data by themes and patterns." },
  { id: "P1-44", question: "Which policy of higher education primarily emphasises widening participation, equity and inclusion for underrepresented groups?", options: ["Selective elitist intake","Access and equity policies (inclusive higher education)","Exclusionary quotas","Privatisation only"], answer: 1, explanation: "Access and equity policies aim to increase representation and remove barriers for marginalised learners." },
  { id: "P1-45", question: "Which is the best practice to prevent publication bias in meta-analyses?", options: ["Include only published studies","Search grey literature and unpublished studies and perform funnel-plot sensitivity", "Ignore small studies","Only include high citation works"], answer: 1, explanation: "Searching grey literature and assessing publication bias with funnel plots reduces bias toward positive results." },
  { id: "P1-46", question: "Which metric indicates effect size for difference between two means standardized by pooled standard deviation?", options: ["p-value","Cohen's d","Odds ratio","Chi-square"], answer: 1, explanation: "Cohen's d measures standardized mean difference to convey substantive effect size independent of sample size." },
  { id: "P1-47", question: "Which statement about open educational resources (OER) is correct?", options: ["OER are always commercial","OER are freely licenced educational materials that can be reused and adapted","OER cannot be remixed","OER require purchase"], answer: 1, explanation: "OER use open licenses (e.g., Creative Commons) enabling reuse, adaptation and redistribution, often freely." },
  { id: "P1-48", question: "Which of the following best describes triangulation in mixed-methods research?", options: ["Using only quantitative methods","Combining multiple methods or data sources to corroborate findings","Discarding qualitative data","Using identical instruments only"], answer: 1, explanation: "Triangulation enhances validity by integrating different methods or data to cross-check findings." },
  { id: "P1-49", question: "Which statistical model is appropriate when the dependent variable is binary (e.g., pass/fail)?", options: ["Linear regression (OLS)","Logistic regression","ANOVA","Principal component analysis"], answer: 1, explanation: "Logistic regression models binary outcomes with log-odds link function, unlike OLS which is inappropriate for dichotomous dependent variables." },
  { id: "P1-50", question: "Which of the following best exemplifies good data management practice for reproducible research?", options: ["Not storing raw data","Documenting data provenance, code, and sharing anonymised datasets and analysis scripts","Deleting code after use","Relying on memory only"], answer: 1, explanation: "Reproducible research requires preserved raw data, documentation of data provenance and shared analysis code for verification and reuse." }
];
    2016: [
        { question: "What is the capital of France?", options: ["Paris","London","Berlin","Rome"], answer: 0, explanation: "Paris is the capital of France." }
    ]
    // Add remaining years similarly
};

// ==== DOM Elements ====
const yearList = document.getElementById('yearList');
const selectedYearTitle = document.getElementById('selectedYear');
const questionText = document.getElementById('questionText');
const optionsList = document.getElementById('optionsList');
const submitBtn = document.getElementById('submitBtn');
const explanationDiv = document.getElementById('explanation');
const timerDiv = document.getElementById('timer');

// Navigation Buttons
let nextBtn, prevBtn;

// ==== Variables ====
let currentYear = null;
let currentQuestionIndex = 0;
let selectedOption = null;
let timerInterval;
let timePerQuestion = 120; // 2 minutes
let timeRemaining = timePerQuestion;
let score = 0;

// ==== Populate Year List ====
years.forEach(y => {
    const li = document.createElement('li');
    li.textContent = y;
    li.addEventListener('click', () => selectYear(y));
    yearList.appendChild(li);
});

// ==== Select Year ====
function selectYear(year){
    currentYear = year;
    currentQuestionIndex = 0;
    score = 0;
    selectedYearTitle.textContent = `Year: ${year}`;
    loadQuestion();
}

// ==== Load Question ====
function loadQuestion(){
    clearInterval(timerInterval);
    selectedOption = null;
    timeRemaining = timePerQuestion;
    explanationDiv.innerHTML = "";

    const questions = questionsData[currentYear];
    if(!questions || questions.length === 0){
        questionText.textContent = "No questions available for this year.";
        optionsList.innerHTML = "";
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = `Q${currentQuestionIndex+1}: ${question.question}`;

    optionsList.innerHTML = "";
    question.options.forEach((opt,index) => {
        const li = document.createElement('li');
        li.textContent = opt;
        li.addEventListener('click', () => selectOption(index, li));
        optionsList.appendChild(li);
    });

    // Add navigation buttons if not exist
    if(!nextBtn){
        nextBtn = document.createElement('button');
        nextBtn.textContent = "Next";
        nextBtn.style.marginLeft = "10px";
        nextBtn.addEventListener('click', nextQuestion);
        submitBtn.parentNode.appendChild(nextBtn);
    }
    if(!prevBtn){
        prevBtn = document.createElement('button');
        prevBtn.textContent = "Previous";
        prevBtn.style.marginLeft = "10px";
        prevBtn.addEventListener('click', prevQuestion);
        submitBtn.parentNode.appendChild(prevBtn);
    }

    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
}

// ==== Select Option ====
function selectOption(index, li){
    selectedOption = index;
    Array.from(optionsList.children).forEach(c => c.style.background = '#fdebd3');
    li.style.background = '#fad7a0';
}

// ==== Submit Answer ====
submitBtn.addEventListener('click', () => {
    if(selectedOption === null) return alert("Select an option first!");

    clearInterval(timerInterval);
    const question = questionsData[currentYear][currentQuestionIndex];

    if(selectedOption === question.answer){
        score++;
    }

    explanationDiv.innerHTML = `<strong>Correct Answer:</strong> ${question.options[question.answer]}<br><strong>Explanation:</strong> ${question.explanation}`;
});

// ==== Next Question ====
function nextQuestion(){
    const questions = questionsData[currentYear];
    if(currentQuestionIndex < questions.length - 1){
        currentQuestionIndex++;
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        questionText.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
        optionsList.innerHTML = "";
        explanationDiv.innerHTML = "";
    }
}

// ==== Previous Question ====
function prevQuestion(){
    if(currentQuestionIndex > 0){
        currentQuestionIndex--;
        loadQuestion();
    }
}

// ==== Timer ====
function updateTimer(){
    timeRemaining--;
    updateTimerDisplay();

    if(timeRemaining <= 0){
        clearInterval(timerInterval);
        explanationDiv.innerHTML = `<strong>Time Over!</strong> Correct Answer: ${questionsData[currentYear][currentQuestionIndex].options[questionsData[currentYear][currentQuestionIndex].answer]}`;
    }
}

function updateTimerDisplay(){
    let minutes = Math.floor(timeRemaining/60);
    let seconds = timeRemaining % 60;
    timerDiv.textContent = `Time: ${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

// ==== Mobile Menu Toggle ====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
