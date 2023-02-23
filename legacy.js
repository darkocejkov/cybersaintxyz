import React, {useState, useEffect} from 'react'

export const LegacyView = ({}) => {

    return(
        <div className={'body-legacy'}>
            <div id="buttons">
                <p onClick='back()' id='back'> prev &nbsp;</p> <p onClick='play()' id='play'> play &nbsp;</p> <p
                onClick='stop()' id='stop'> stop &nbsp;</p> <p onClick='next()' id='next'> next &nbsp;</p> <p
                id='name'> █ </p>
            </div>
            <div id="sketcher"></div>
            <div id="boxbox">
                <div id="box">
                    <h1 className="text"><span className="bottom">darko cejkov.</span></h1>
                    <div id="navigation">
                        <nav>
                            <ul className="list">
                                <li className="item">skills</li>
                                <li className="item">projects</li>
                                <li className="item">about me</li>
                                <li className="item">socials</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )

}