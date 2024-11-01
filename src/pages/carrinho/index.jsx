import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Produto from '../../components/produto'
import  Cabecalho  from '../../components/cabecalho';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";

export default function carrinho(){
 
 
 
    return(

 <div>
    <Cabecalho/>
 
     <div>
    <Produto />
    <Produto/>
    <Produto/>
    <Produto/>
    <Produto/>
    </div>

 </div>

 )





}