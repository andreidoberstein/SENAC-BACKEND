```
create table clients_ecommerce(
  id_client int not null auto_increment,
  ds_name varchar(255),
  nm_cpf int,
  fl_status enum('A','I') default 'A',
  dt_created_at datetime default CURRENT_TIMESTAMP,
  primary key(id_client)
);
```
```
create table products (
  id_product int not null auto_increment,
  ds_name varchar(120) not null,
  ds_description varchar(255),
  nm_value float not null,
  ds_brand varchar(120),
  ds_status enum('A','I') default 'A',
  dt_created_at datetime default CURRENT_TIMESTAMP,
  primary key (id_product)
);
```
```
create table cart (
  id_cart int not null auto_increment,
  id_client int,
  id_product int,
  primary key(id_cart),
  foreign key(id_client) references clients_ecommerce(id_client),
  foreign key(id_product) references products(id_product)
);
```