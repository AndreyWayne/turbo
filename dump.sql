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
1	1	1	1	1	1	2	3	4	5	6	8	9	1
\.


--
-- Data for Name: uslugi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.uslugi (id, name, image, description, price) FROM stdin;
\.


--
-- Data for Name: works; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.works (id, name, description, image) FROM stdin;
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

SELECT pg_catalog.setval('public.uslugi_id_seq', 33, true);


--
-- Name: works_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.works_id_seq', 33, true);


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

