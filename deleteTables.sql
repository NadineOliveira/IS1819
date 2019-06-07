Set SQL_SAFE_UPDATES = 0;
delete FROM seguradora.participacao where 1=1;
Set SQL_SAFE_UPDATES = 1;

ALTER TABLE seguradora.participacao AUTO_INCREMENT = 1;

Set SQL_SAFE_UPDATES = 0;
delete FROM hospital.Pedido where 1=1;
Set SQL_SAFE_UPDATES = 1;

ALTER TABLE hospital.Pedido AUTO_INCREMENT = 1;