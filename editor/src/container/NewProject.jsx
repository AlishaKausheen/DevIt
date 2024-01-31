import React from 'react';
import SplitPane from "react-split-pane";
import { FaHtml5 } from "react-icons/fa6";

const NewProject = () => {
    return <>
        <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden'>
            {/*alert section */}
            {/*header section */}
            {/*coding section */}
            <div>
                {/*horizontal */}
                <SplitPane split='horizontal' minSize={100} maxSize={-100} defaultSize={"50%"}>

                
                    {/*top coding section */}
                    <SplitPane split='vertical' minSize={500}>
                        {/* html code */}
                        <div className='w-full h-full flex flex-col items-start justify-start '>
                            <div className='w-full flex items-center justify-between '>
                                <div className='bg-zinc-800 px-4 py-2 border-t-4 flex items-center justify-center gap-3'>
                                    <FaHtml5 className='text-xl text-red-500' />
                                    <p className='text-gray-300 font-semibold border-t-gray-500'>HTML</p>
                            </div>
                            </div>
                            <div>Code Mirror</div>

                        </div>

                        <SplitPane split='vertical' minSize={500}>
                            {/*css code */}
                            
                            {/* js code */}
                        </SplitPane>
                     
                    </SplitPane>
                    
                    {/*bottom result section */}
                    <div>

                    </div>
                    </SplitPane>
            </div>

        </div>
    </>
}

export default NewProject
