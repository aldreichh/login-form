import React, {useEffect, useState } from 'react';

function App() {
  const [modal, setModal] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  }

  const getUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  }

  const getPassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }

  const loginButton = () => {
    console.log('login');
    console.log('hello');
  }

  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);

  return (
    <>
    {modal && (
      <div className="overlay backdrop-blur-3 fixed w-screen h-screen flex items-center justify-center text-center">
        <div className="p-5 bg-white shadow-2xl md:w-3/4 lg:w-2/6   rounded-xl modal-content pt-8 pb-9">
          <div className="top p-1 flex justify-center items-center ">
            <img className="w-20" src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/317536058_523151656496067_3210048947537538704_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGWRkL-UMzV4Rgh5yl3xakgRZ6x3ILbAo1FnrHcgtsCjTQ3PgaC5lLrGKfRhgKUXOc9PwLdejYnkZFgims8-52y&_nc_ohc=7uE7ajdGE4MAX_ihJFr&_nc_ht=scontent.fcgy1-1.fna&oh=00_AfAod2cCqdC1-w2ZtbzxlRKlhred0I52NoXFaCtPBGAOmw&oe=64A03FE4"></img>
            <text className="ml-2 text-2xl italic font-semibold">We Build Great Teams</text>
          </div>
          <div className="mid p-2 mt-4">
            <p>By continuing to use the Leave Portal, You agree
              to the <a className="ref-link font-bold" href="">Next BPO Solution Inc Data Privacy 
              Statement.</a>
            </p>
          </div>
          <div className="mid mt-5 w-32 mx-auto rounded bg-teal-500 hover:bg-teal-700">
            <button className="btn-continue shadow-inner p-2 w-full h-full text-white" onClick={toggleModal}>Continue</button>
          </div>
        </div>
      </div>
     )}

      {/* <img className="w-14 ml-5" src="https://cdn-icons-png.flaticon.com/512/993/993891.png"></img>
        <text className="ml-3 text-xl font-bold italic">We Build Great Teams</text> */}
    <div className="body h-screen ">
      <div className="header h-20 flex items-center shadow-md">
        <img className="ml-4 w-40" src="https://www.outsourceaccelerator.com/wp-content/uploads/2023/04/5942b086a46f8c830144a229cdcfd21a_next_bpo_logo_2023.png"></img>
      </div>

      {/* h-5/6  */}
      <div className="contents-container flex flex-col lg:flex-row  mt-10 h-4/5">
        <div className="mr-10 w-full lg:w-5/6 lg:ml-10 h-full flex flex-col items-center">
          <div className="img h-3/5 w-full ">
            <img className="h-full w-full object-cover object-top rounded-xl" src="https://nextbposolutions.com/site_img/slide_1.jpg"></img>
          </div>
          <div className="mt-10 text-justify overflow-hidden  ">
            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tortor sed diam consequat aliquet. Donec a arcu eget lacus dignissim pharetra. Cras pellentesque eros neque, eget pellentesque erat molestie in. Ut dui arcu, vestibulum sit amet arcu a, tristique ornare risus. Sed vel metus et nibh hendrerit sollicitudin. Donec eu dui id dolor vestibulum tempus quis gravida neque. Sed tincidunt in libero vitae suscipit. Duis eget ex ac risus lobortis imperdiet vitae at felis. Vestibulum a porttitor purus. Donec nec velit sodales, placerat diam quis, semper lorem.

Vivamus pretium consectetur varius. Integer ornare et arcu sed rhoncus. Phasellus ullamcorper ultricies lacus, nec finibus metus imperdiet hendrerit. Morbi pharetra massa congue feugiat congue. Integer rutrum, arcu sed fermentum interdum, lacus enim bibendum lacus, sit amet bibendum orci ante nec ligula. Nulla auctor nunc eu purus ultrices, eu laoreet neque pretium. Praesent dignissim aliquet malesuada. Vestibulum quis tortor non diam ultricies efficitur. Suspendisse sagittis bibendum massa, at accumsan felis laoreet a. Integer nec odio sit amet magna tempor tristique. Nam dignissim placerat ultrices. Quisque rutrum orci dolor, et venenatis sapien malesuada vitae. Vivamus pretium tellus eget libero malesuada dictum.

Pellentesque sed felis sit amet orci rhoncus sodales. Praesent a leo blandit, blandit augue at, interdum neque. Duis faucibus urna non lorem dictum posuere. Nulla elementum turpis sit amet lectus tincidunt, eget tincidunt metus sollicitudin. Donec euismod metus ut placerat tristique. Nunc congue quam hendrerit fringilla suscipit. Praesent tristique facilisis dui non pellentesque.

          </text>
          </div>
        </div>
        
        
        <div className="rounded-xl shadow-2xl flex flex-col justify-center items-center p-10 w-full lg:w-1/2 h-full lg:mr-10">
          <div className="image w-52 ">
            <img className=" " src="https://cdn-icons-png.flaticon.com/512/226/226847.png"></img>
          </div>
          <div className="title mt-5 text-center w-4/5  ">
            <text className="text-3xl font-bold text-teal-600">Next BPO Solutions Inc.</text>
          </div>
          <div className="input mt-8 w-4/5 ">
            <input onChange={getUsername} className="h-14 w-full rounded border-solid border-2 border-opacity-30 border-teal-500 pl-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-teal-500" type="text" placeholder="Username">
            </input>
            <br></br>
            <input onChange={getPassword} className="h-14 mt-5 w-full rounded border-solid border-2 border-opacity-30 border-teal-500 pl-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-teal-500 " type="password" placeholder="Password">
            </input>
          </div>
          <div className="forgotPassword pl-1 w-4/5 mt-2">
            <a className="text-teal-600" href="">Forgot Password?</a>
          </div>
          <div className="mt-10 w-4/5 h-14 text-center rounded bg-teal-500 hover:bg-teal-700 ">
            <button onClick={loginButton} className="w-full h-14 text-white shadow-inner">Log In</button>
          </div>
        </div>
        
      </div>
    </div>

     </>
  );
}

export default App;
