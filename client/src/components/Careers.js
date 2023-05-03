import '../styles/careers.css'
import Button from 'react-bootstrap/Button';



function Careers() {

    return(
        <>

            <div className='container-careers-main'>
                <div className='container-careers-intro'>
                    <div>
                        <h1>Want to join our team?</h1>                    
                    </div>
                    <div>
                        <p>We are currently seeking talented electricians of all skill levels to join our team. Whether you are an experienced journeyman or a recent graduate of an electrical training program, we welcome your application. We believe in providing a supportive and inclusive work environment where everyone has the opportunity to grow and develop their skills. As an electrician with our company, you will have the chance to work on a variety of projects and contribute to the success of our clients. Come join us and be a part of a dynamic and growing team!</p>
                    </div>
                </div>
                <div>
                    <h4>We are looking for someone who has the following qualities:</h4>
                        <ul>
                            <li>Strong technical skills and knowledge of electrical systems</li>
                            <li>Good understanding of electrical codes and safety procedures</li>
                            <li>Attention to detail and ability to follow instructions accurately</li>
                            <li>Good problem-solving skills and ability to troubleshoot electrical issues</li>
                            <li>Strong work ethic and commitment to completing projects on time</li>
                            <li>Good communication skills and ability to work well in a team environment</li>
                            <li>Physical fitness and ability to work in various environments</li>
                            <li>Flexibility and adaptability to changing job requirements and work schedules</li>
                            <li>Positive attitude and willingness to learn and take on new challenges</li>
                            <li>Commitment to providing exceptional customer service and maintaining professional standards at all times</li>
                        </ul>
                    <h5>Think you've got what it takes?</h5>
                    <h6>Send us your resume below and tell us why you would make a good fit for our team!</h6>
                </div>
          
                <div>
                <Button href="mailto: kim@n2ec.com" variant="dark">Click Here to Send Your Resume!</Button>{' '}
                    {/* <button><a href="mailto: kim@n2ec.com" >Apply Today!</a></button> */}
                </div>
            </div>
        </>
    )
}

export default Careers