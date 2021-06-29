--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5 (Debian 10.5-1.pgdg90+1)
-- Dumped by pg_dump version 10.5 (Debian 10.5-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: about; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.about (
    id integer NOT NULL,
    name text,
    description text
);


ALTER TABLE public.about OWNER TO postgres;

--
-- Name: about_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.about ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.about_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: main; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.main (
    id integer NOT NULL,
    head1 text,
    head2 text,
    do_description text,
    work_head text,
    work_description text,
    contacts_time1 text,
    contacts_time2 text,
    phone text,
    email text,
    address text,
    vk text,
    inst text,
    description text
);


ALTER TABLE public.main OWNER TO postgres;

--
-- Name: main_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.main ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.main_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: uslugi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.uslugi (
    id integer NOT NULL,
    name text,
    image text,
    description text,
    price text
);


ALTER TABLE public.uslugi OWNER TO postgres;

--
-- Name: uslugi_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.uslugi ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.uslugi_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: works; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.works (
    id integer NOT NULL,
    name text,
    description text,
    image text
);


ALTER TABLE public.works OWNER TO postgres;

--
-- Name: works_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.works ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.works_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: about; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.about (id, name, description) FROM stdin;
1	1	1
\.


--
-- Data for Name: main; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main (id, head1, head2, do_description, work_head, work_description, contacts_time1, contacts_time2, phone, email, address, vk, inst, description) FROM stdin;
1	Turbo	 Автосервис	Наш сервис предоставляет более 16 услуг по ремонту автомобиля с 2007 года, соблюдая идеальное качество работы и низкие цены.	Остаёмся лучшими в Челябинске	 В работе используем современное оборудование. В арсенале: стапель, профессиональная покрасочная камера, немецкие пистолеты SATA, шлифмашинки MIRKA. Ответственно подходим к каждому заказу и даём гарантию качества 1 год. Можете посмотреть примеры работ, которые говорят сами за себя.	2	3	4	5	6	8	9	СТО с сильнейшими специалистами в Челябинске. Мы занимаемся кузовным ремонтом и покраской автомобиля по последним технологиям.
\.


--
-- Data for Name: uslugi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.uslugi (id, name, image, description, price) FROM stdin;
35	АВТОПОКРАСКА	http://74autoturbo.ru/image/services/2.jpg	Локальная покраска, покраска бамперов. Стоимость зависит от размера работ.	5000
34	Кузовные работы 	http://74autoturbo.ru/image/services/1.jpg	Делаем восстановление геометрии, локальное удаление коррозии и ржавчины, ремонт бампера, ремонт автомобильных порогов, жестяные работы, сварочные работы, стапельные работы, рихтовку. Стоимость будет зависеть от объема работ.	500
36	ЗАМЕНА МАСЛА	http://74autoturbo.ru/image/services/3.jpg	Периодичность замены масла зависит от состояния двигателя, качества масел и горючего, погодных условий, условий эксплуатации автомобиля, на которые влияет в том числе качество дорог.	300
37	ПОДБОР АВТОПОКРАСКИ	http://74autoturbo.ru/image/services/4.jpg	Мы используем компьютерный подбор. Это является сравнительно новым направлением в авторемонте. В этом случае используется специальное оборудование и компьютерная программа, позволяющая очень точно определить цвет и тон кузова, а затем подобрать краску.	300
38	ЗАМЕНА ШАРОВЫХ ОПОР	http://74autoturbo.ru/image/services/5.jpg	От состояния деталей ходовой части зависят устойчивость автомобиля на дороге, его управляемость, комфорт и безопасность пассажиров. При этом она постоянно испытывает самые разные по интенсивности и силе нагрузки, как статические, так и динамические. Износ или выход из строя шаровой опоры приводит к потере управляемости машины, а также может повлечь за собой другие, не менее серьезные проблемы. Поэтому неисправность шаровой опоры требует немедленного и самого пристального внимания владельца.	300
39	ЗАМЕНА САЙЛЕНТБЛОКОВ	http://74autoturbo.ru/image/services/6.jpg	В состав сайлентблока входят резиновые (полиуретановые) вставки, между которыми находится металлическая втулка. Срок службы резинометаллических шарниров доходит до 100 тыс. км пробега, однако, учитывая российские дороги, обычно он не превышает и 50 тыс. км, после чего потребуется ремонт подвески.	300
41	ЗАМЕНА РУЛЕВЫХ ТЯГ	http://74autoturbo.ru/image/services/8.jpg	Признаками неисправности рулевой тяги могут служить появление в подвеске посторонних стуков или увеличенный люфт руля, слишком тугое вращение рулевого колеса. Помните: неисправность рулевого привода значительно повышает вероятность аварии. Поэтому появление любого из этих признаков — повод срочно обратиться в сервис для ее замены.	500
45	ЗАМЕНА РЕМНЯ ГРМ	http://74autoturbo.ru/image/services/12.jpg	Замена ремня ГРМ вовремя – одно из главных условий бесперебойной работы всего транспортного средства.	1000
40	ДИАГНОСТИКА ХОДОВОЙ	http://74autoturbo.ru/image/services/7.jpg	Осмотр амортизаторов автомобиля, пружин, рычагов, опорных чашек\nПроверку шаровых опора, рулевых наконечников\nПроверку состояния узлов ходовой части автомобиля\nПроверку ступичных подшипников автомобиля\nОпределение уровня износа тормозных колодок автомобиля, дисков, барабанов, шлангов\nПроверку герметичности тормозной системы и гидросистем автомобиля	400
43	РЕМОНТ ХОДОВОЙ	http://74autoturbo.ru/image/services/10.jpg	замена ШРУСа;\nзамена привода;\nзамена стабилизатора;\nзамена амортизатора;\nзамена стоек амортизатора;\nзамена рычагов подвески;\nзамена опоры амортизатора;\nзамена пружин;\nпроверка и замена сцепления;\nремонт амортизаторов, опорных чашек, пружин;\nизменение люфта;\nтехническое обслуживание рулевого управления и тормозной системы.\nЦенник складывается из двух факторов: сложности работ и стоимости необходимых деталей ходовой части.	500
42	ЗАМЕНА ТОРМОЗНЫХ КОЛОДОК	http://74autoturbo.ru/image/services/9.jpg	Неисправные тормозные колодки могут привести к увеличению тормозного пути и проблемам с торможением в экстренной ситуации. Слишком тонкие тормозные диски и барабаны могут просто не выдержать напряжения и треснуть. Заменяйте тормозные колодки вовремя!	500
44	ЗАМЕНА АМОРТИЗАТОРОВ	http://74autoturbo.ru/image/services/11.jpg	Замена амортизаторов одна из услуг по ремонту подвески автомобиля.	800
\.


--
-- Data for Name: works; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.works (id, name, description, image) FROM stdin;
34	Кия Соренто	Выполнили ремонт и покраску дверей, переднего крыла и заднего бампера	https://sun9-5.userapi.com/impg/vv_-3azTrGnjKAgJla_qS2QiyVJBMCJj6mOOKg/7lbihxy0uXs.jpg?size=1080x1280&quality=96&sign=efdebe05ab4f7eebdebd33e49931ae0e&type=album
35	Тойота Лэнд Крузер	Выполнили ремонт и покраску переднего крыла	https://sun9-64.userapi.com/impg/R7f9h6hlqkWgk0TxFbGtHtaZbzGR09bRyqK0ug/fvGi6ZzSXe8.jpg?size=1080x1280&quality=96&sign=45cb6257a7e3dc0ade832e45c7cff895&type=album
\.


--
-- Name: about_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.about_id_seq', 33, true);


--
-- Name: main_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.main_id_seq', 33, true);


--
-- Name: uslugi_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.uslugi_id_seq', 45, true);


--
-- Name: works_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.works_id_seq', 35, true);


--
-- Name: about about_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.about
    ADD CONSTRAINT about_pkey PRIMARY KEY (id);


--
-- Name: main main_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main
    ADD CONSTRAINT main_pkey PRIMARY KEY (id);


--
-- Name: uslugi uslugi_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.uslugi
    ADD CONSTRAINT uslugi_pkey PRIMARY KEY (id);


--
-- Name: works works_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.works
    ADD CONSTRAINT works_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

