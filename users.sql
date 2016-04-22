-- Version Server
-- Date 
-- Author 
-- Version 

SET SQL_MODE = "NO_AUTO_VALUES_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS 'tb_User' (
  'user_id' int(32) NOT NULL AUTO_INCREMENT,
  'user_tel' varchar(11) NOT NULL,
  'user_name' varchar(50) NOT NULL,
  'user_passwd' varchar(128) NOT NULL,
   PRIMARY KEY ('user_id')
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

INSERT INTO 'tb_User' ('user_id', 'user_tel', 'user_name', 'user_passwd') VALUES
(10, '123', '张三', '123456'),
(11, '456', '李四',  '03937263623'),
(12, '567', 'Jin Jin', '082271626121'),
(13, '789', 'Ujang', '07846352532'),
(14, '008','Memet', '038372636232'),
(15, '990', 'Hobo', '038373273262'),
(16, '998','Jhon Taylor',  '039223232323');
