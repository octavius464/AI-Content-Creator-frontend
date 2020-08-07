import React from "react"
import systemArchitectureDiagram from '../assets/images/architecture.png';
import "./SystemInfo.css";

function SystemInfo(){
    return(
        <div className="system-info">
            <h2>System Information</h2>
            <h3>Problem</h3>
            <p>Traditional ways of creating a digital marketing material, which usually consists a delicate
            combination of image and slogan, has been a cumbersome and labor-intensive process incurring
            high cost for a business. To solve this problem, this project proposes a A.I.-enabled automated
            content creation engine to generate digital marketing material for a coffee business using advanced
            machine learning methods.</p>
            <h3>Why Machine Learning?</h3>
            <p>Machine Learning is the scientific
            study and usage of algorithms and statistical models to get a computer to perform certain task
            without being explicitly programmed to do so. By learning from experience in the form of
            data, it seeks to learn the generalized pattern or ”law of nature” behind the data which enables
            predictions to be made when given a set of data regardless of whether it is previously ”seen”
            by the algorithm or not. With such advancements, numerous state-of-the-art applications have been built out of
            it ranging from machine translation to lip reading, optical character recognition to generating
            artworks and designing drugs to predicting the stock market. Regarding this project, our engine takes into digital marketing data in the form of
            image and text collected from the web to learn their corresponding representations using machine learning techniques. After learning
            our engine would be able to generate new content from these learned representations and thus mimicking the role of a
            graphics designer or artist. </p>
            <h3>System architecture - Version 1</h3>
            <img src={systemArchitectureDiagram} alt="System Architecture Diagram" height="400" width="800"/>;
            <p>The rationale of the A.I.-enabled automated content creation engine is to first generate background
            visual image and slogan from two separate deep learning models, namely Deep Convolutional Adversarial Generative Network
            and Long-Short Term Memory. The location of the object of interest (coffee cup for this project) from the generated image is then
            extracted by an object detector which is implemented using state-of-the-art computer vision
            techniques. This position information of the object is then passed to an optimal location finder
            module which uses heuristics to locate a suitable coordinate on the generated image that is
            most optimal, at least in the sense of a human observer, for merging the generated slogan into
            the generated image.</p>
            <h3>System architecture - Version 2</h3>
            <p>This version of the architecture is similar to the one mentioned above in terms of novel image and slogan
            generation. The main difference is in the way the slogan is merged onto the image. 
            After the generated image is produced, it is then passed to the object detector for the purpose of verifying the image of 
            relevant content. The font size of the generated slogan is adjusted dynamically according to its sentence length before
            inserting into a pre-defined template together with the generated image. </p>
        </div>
    )
}

export default SystemInfo