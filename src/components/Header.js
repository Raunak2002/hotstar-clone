import styled from "styled-components";
import { useEffect } from "react";
import { auth,provider } from "./firebase";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails} from "../features/userSlice";

function Header(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    
    useEffect(() => {
        auth.onAuthStateChanged(async(user)=>{                  // check if we are already logged in or not
            if (user) {                                       //  and navigate us to home screen
                setUser(user);
                navigate("./home");
            }
        });
    }, [username]);

    function handleAuth(){
        if (!username) {
        auth.signInWithPopup(provider).then((result)=>{
            setUser(result.user);
            }).catch((error)=>{
                alert(error.message);
            });
        }

        else if(username) {
            auth.signOut().then(()=>{
                dispatch(setSignOutState())
                navigate('/')
            }).catch((err) => alert(err.message));
        }
    }

    function setUser(user){
        dispatch(
            setUserLoginDetails({                                  // {} action.payload is an json file
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return <Nav>
    <Logo>
        <img src={require('../images/logo.png')} alt=""/>
    </Logo>
    {
    !username ? (<LogIn onClick={handleAuth}>Log In</LogIn>)
    :(
    <>
    <NavMenu>
        <a href="/home">
            <img src={require("../images/home-icon.png")} alt="Home"/>
            <span>HOME</span>
        </a>

        <a href="/search">
            <img src={require("../images/search-icon.png")} alt="Home"/>
            <span>SEARCH</span>
        </a>

        <a href="/home">
            <img src={require("../images/watchlist-icon.png")} alt="Home"/>
            <span>WATCHLIST</span>
        </a>
        
        <a href="/home">
            <img src={require("../images/movie-icon.png")} alt="Home"/>
            <span>MOVIES</span>
        </a>

        <a href="/home">
            <img src={require("../images/original-icon.png")} alt="Home"/>
            <span>ORIGINAL</span>
        </a>

        <a href="/home">
            <img src={require("../images/series-icon.png")} alt="Home"/>
            <span>SERIES</span>
        </a>
    </NavMenu>

    <SignOut>
        <UserImg src={userPhoto} alt={username} />
        <DropDown>
            <span onClick={handleAuth}>SignOut</span>
        </DropDown>
    </SignOut>
    </> 
    )}
    </Nav>;
};


const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index:3;
`;

const UserImg = styled.img`
    height: 100%;
    border-radius: 50px;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    
    a{
        display: flex;
        align-items: center;
        padding: 0 18px;
        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08px;
            padding: 2px 0px;
            white-spacing: nowrap;
            position: relative;
        

        &:before{
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -8px;
            left: 0px;
            content: "";
            height: 2px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
            }
        }    

        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media (max-width: 768px){
        display: none;
    }
    `;


    const LogIn = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer; 
    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

    const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
    color: white;
    `

    const SignOut = styled.div`
    position: relative;
    height: 48px;    
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    
    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
    `

export default Header;