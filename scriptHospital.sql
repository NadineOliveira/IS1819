INSERT INTO `hospital`.`hospital`
(`idHospital`,
`nome`,
`telemovel`)
VALUES
(1,'S.Joao','252252252');
INSERT INTO `hospital`.`utilizador`
(`email`,
`nome`,
`password`,
`username`,
`tipo_entidade`,
`telemovel`,
`Hospital_idHospital`)
VALUES
('joao@mail.com','Joao Gomes','$2a$10$cHFmcZYB3d5YJo4ttModS.vkA.ENu8ymhOSxps1lBmTdTQ.GTeWby','jg','hospital','910910910',1),
('nadine@mail.com','Nadine Oliveira','$2a$10$PAfHt/2zGkzkPYS3XVei6uuoiwb.6ZCNXwBaa2frTdFdhgR34LnNW','no','hospital','911911911',1);

INSERT INTO `hospital`.`medico`
(`idMedico`,
`nome`,
`telemovel`,
`area_especializacao`,
`Hospital_idHospital`)
VALUES
(1,'Carlos Ferreira','910987987','Pneumonologista',1);

INSERT INTO `hospital`.`utente`
(`nif`,
`nome`,
`data_nascimento`,
`telemovel`)
VALUES
('155155155','Maria Fonseca','1970-11-11','968968968'),
('181181181','Jose Araujo','1976-10-31','999999999');

INSERT INTO `hospital`.`diagnóstico`
(`idDiagnóstico`,
`descricao`,
`area_clinica`,
`data`,
`Medico_idMedico`,
`Utente_nif`)
VALUES
(1,'Problema respiratorio','Pneumonologia','2019-05-05',1,'155155155');

INSERT INTO `hospital`.`factura`
(`idFactura`,
`descricao`,
`preco`)
VALUES
(1,'Tratamentos de pneumonologia',20.0);

INSERT INTO `hospital`.`tratamento`
(`idTratamento`,
`nome`,
`custo`,
`Diagnóstico_idDiagnóstico`,
`factura_idFactura`)
VALUES
(1,'Raio-x',20.0,1,1);

INSERT INTO `hospital`.`pedido`
(`nif`,
`nome_seguradora`,
`estado`,
`nome_hospital`,
`nr_processo`,
`data_acidente`,
`tipo_acidente`,
`idSeguro`,
`hospital_pedido`)
VALUES('123123123','SeguradoraA',1,'S.Joao',1,'2019-12-12','Automóvel',1,1);



