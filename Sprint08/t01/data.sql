USE ucode_web;
INSERT INTO heroes(name, description, class_role)
VALUES
  ('Aatrox', 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery.', 'tankman'),
  ('Ahri', 'Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence.', 'dps'),
  ('Akali', 'Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need.', 'dps'),
  ('Alistar', 'Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire.', 'healer'),
  ('Bard', 'A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos.” ', 'healer'),
  ('Blitzcrank', 'Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste.', 'healer'),
  ('Caitlyn', 'Renowned finest peacekeeper, Caitlyn is also Piltovers best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partners more impetuous nature.', 'dps');
INSERT INTO heroes(name, description, class_role, race)
VALUES
  ('Darius', 'There is no greater symbol of Noxian might than Darius, the nations most feared and battle-hardened commander.', 'tankman', 'knight'),
  ('Fiora', 'The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier.', 'tankman', 'vanguard'),
  ('Jhin', 'Al Pratt, the first hero to adopt the mantle of the Atom, was a college student tired of being teased about his diminutive stature.', 'dps', 'cyborg');
SELECT * FROM heroes;