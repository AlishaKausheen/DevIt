import React, { useEffect, useState } from 'react';
import SplitPane from "react-split-pane";
import { FaChevronDown, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa6";
import { FcSettings } from 'react-icons/fc';
import { Logo } from "../assets";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MdCheck, MdEdit } from 'react-icons/md';


const NewProject = () => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [output, setOutput] = useState("");
    const [isTitle, setIsTitle] = useState("");
    const [title, setTitle] = useState("Untitled");

    useEffect(() => {
        updateOutput()
    }, [html, css, js]);

    const updateOutput = () => {
        const combinedOutput = `
        <html>
        <head>
        <style>${css}</style>
        </head>
        <body>
        ${html}
        <script>${js}</script>
        </body>
        </html>
        `;
        setOutput(combinedOutput);
    }
    return <>
        <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden'>
            {/*alert section */}
            {/*header section */}
            <header className='w-full flex items-center justify-between px-12 py-4'>
                <div className='flex items-center justify-center gap-6 '>
                    <Link to={"/home/projects"}>
                        <img className='w-32 h-auto object-contain' src={Logo} />
                    </Link>
                    <div className='flex flex-col items-start justify-start'>
                        {/* title */}
                        <div className='flex items-center justify-center gap-3'>
                            <AnimatePresence>
                                {isTitle ? <>
                                <motion.input key={"TitleInput"} type='text' placeholder='Your Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                </> : <>
                                        <motion.p key={"titleLabel"} className='px-3 py-2 text-white text-lg'>
                                            {title}

                                        </motion.p>
                                </>}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isTitle ? (<>
                                    <motion.div key={"MdCheck"} whileTap={{ scale: 0.9 }} className='cursor-pointer' onClick={() => setTitle(false)}>
                                        <MdCheck className='text-2xl text-emerald-500'/>

                                    </motion.div>
                                </>) : (<>
                                        <motion.div key={"MdEdit"} whileTap={{ scale: 0.9 }} className='cursor-pointer'
                                        onClick={()=>setTitle(true)}>
                                            <MdEdit className='text-2xl text-emerald-500'/>
                                </motion.div>
                                </>)}
                            </AnimatePresence>

                        </div>
                        {/*follow section */}
                    </div>
                </div>
                {/*user section */}
            </header>
            {/*coding section */}
            <div>
                {/*horizontal */}
                <SplitPane split='horizontal' minSize={100} maxSize={-100} defaultSize={"50%"}>

                
                    {/*top coding section */}
                    <SplitPane split='vertical' minSize={500}>
                        {/* html code */}
                        <div className='w-full h-full flex flex-col items-start justify-start '>
                            <div className='w-full flex items-center justify-between '>
                                <div className='bg-zinc-800 px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                    <FaHtml5 className='text-xl text-red-500' />
                                    <p className='text-gray-300 font-semibold '>HTML</p>
                                </div>
                                {/*icons */}
                                <div className='cursor-pointer flex items-center gap-5 px-4 '>
                                    <FcSettings className='text-xl ' />
                                    <FaChevronDown className='text-xl text-gray-300'/>
                                </div>
                            </div>
                            <div className='w-full px-2 '>
                                <CodeMirror
                                    value={html}
                                    height='600px'
                                    extensions={[javascript({ jsx: true })]}
                                    theme={"dark"}
                                    onChange={(value, viewUpdate) => {
                                        setHtml(value);
                                    }}/>

                            </div>

                        </div>

                        <SplitPane split='vertical' minSize={500}>
                            {/*css code */}
                            <div className='w-full h-full flex flex-col items-start justify-start '>
                            <div className='w-full flex items-center justify-between '>
                                <div className='bg-zinc-800 px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                    <FaCss3Alt className='text-xl text-sky-500' />
                                    <p className='text-gray-300 font-semibold '>CSS</p>
                                </div>
                                {/*icons */}
                                <div className='cursor-pointer flex items-center gap-5 px-4 '>
                                    <FcSettings className='text-xl ' />
                                    <FaChevronDown className='text-xl text-gray-300'/>
                                </div>
                            </div>
                              <div className='w-full px-2 '>
                                <CodeMirror
                                    value={css}
                                    height='600px'
                                    extensions={[javascript({ jsx: true })]}
                                    theme={"dark"}
                                    onChange={(value, viewUpdate) => {
                                        setCss(value);
                                    }}/>

                            </div>


                        </div>
                            
                            {/* js code */}
                            <div className='w-full h-full flex flex-col items-start justify-start '>
                            <div className='w-full flex items-center justify-between '>
                                <div className='bg-zinc-800 px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                    <FaJs className='text-xl text-yellow-500' />
                                    <p className='text-gray-300 font-semibold '>JS</p>
                                </div>
                                {/*icons */}
                                <div className='cursor-pointer flex items-center gap-5 px-4 '>
                                    <FcSettings className='text-xl ' />
                                    <FaChevronDown className='text-xl text-gray-300'/>
                                </div>
                            </div>
                              <div className='w-full px-2 '>
                                <CodeMirror
                                    value={js}
                                    height='600px'
                                    extensions={[javascript({ jsx: true })]}
                                    theme={"dark"}
                                    onChange={(value, viewUpdate) => {
                                        setJs(value);
                                    }}/>

                            </div>


                        </div>
                        </SplitPane>
                     
                    </SplitPane>
                    
                    {/*bottom result section */}
                    <div className='bg-white' style={{overflow:"hidden", height:"100%"}}>
                        <iframe
                            title='result'
                            srcDoc={output}
                            style={{border: 'none', width:'100%', height:'100%'}}
                        />
                    </div>
                    </SplitPane>
            </div>

        </div>
    </>
}

export default NewProject
