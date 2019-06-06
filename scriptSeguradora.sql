INSERT INTO `seguradora`.`seguradora`
(`idSeguradora`,
`nome`,
`telemovel`)
VALUES
(1,'SeguradoraA',919191910);

INSERT INTO `seguradora`.`utilizador`
(`email`,
`nome`,
`password`,
`username`,
`tipo_entidade`,
`telemovel`,
`Seguradora_idSeguradora`)
VALUES
('joao@mail.com','Joao Gomes','$2a$10$cHFmcZYB3d5YJo4ttModS.vkA.ENu8ymhOSxps1lBmTdTQ.GTeWby','jg','seguradora','910910910',1),
('nadine@mail.com','Nadine Oliveira','$2a$10$PAfHt/2zGkzkPYS3XVei6uuoiwb.6ZCNXwBaa2frTdFdhgR34LnNW','no','seguradora','911911911',1);

INSERT INTO `seguradora`.`sinistrado`
(`nif`,
`nome`,
`data_nasc`,
`telemovel`)
VALUES
('155155155','Maria Fonseca','1970-11-11','968968968'),
('181181181','Jose Araujo','1976-10-31','999999999');

INSERT INTO `seguradora`.`seguro`
(`idSeguro`,
`tipo_seguro`,
`descricao`,
`Seguradora_id`)
VALUES
(1,'Automovel','Seguro contra todos os riscos',1),
(2,'Vida','Seguro de vida (morte de causas naturais ou acidental)',1);

INSERT INTO `seguradora`.`seguro_sinistrado`
(`Seguro_idSeguro`,
`Sinistrado_nif`)
VALUES
(1,'155155155'),
(2,'155155155'),
(1,'181181181');





