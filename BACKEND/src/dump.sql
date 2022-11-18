create table if not exists usuarios (
    id serial primary key,
    nome text not null,
    email text not null unique,
    senha text not null
);

create table if not exists carros (
    id serial primary key,
    marca text not null,
    modelo text not null,
    ano integer not null,
    cor text not null,
    valor numeric not null,
    vendido boolean not null
);

create table if not exists vendedores (
    id serial primary key,
    nome text not null
);

create table if not exists vendas (
    id serial primary key,
    carro text not null,
    valor numeric not null,
    data_venda date not null,
    vendedor text not null,
    carro_id integer not null,
    vendedor_id integer not null,
    foreign key (carro_id) references carros(id),
    foreign key (vendedor_id) references vendedores(id)
);