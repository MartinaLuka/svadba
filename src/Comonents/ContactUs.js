import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";

import styles from '../styles/styles.module.css'
import {HStack, useRadioGroup} from "@chakra-ui/react";
import {RadioCard} from "./RadioButton";

export const ContactUs = () => {
    const form = useRef();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [answer, setAnswer] = useState('');
    const [otherAnswer, setOtherAnswer] = useState('');
    const [textInputVisible, setTextInputVisible] = useState(false);

    const options = ['react', 'vue', 'svelte']

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: (val) => {
            console.log("ide gas",val)
        },
    })

    const group = getRootProps()

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("hehehehe", firstName, lastName)

        emailjs.sendForm('service_y43m3zo', 'template_24gvkdo', form.current, 'q7fXFIVo9fuvo6Nwx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);

        // Show text input if the "Other" option is selected
        if (event.target.value === 'other') {
            setTextInputVisible(true);
        } else {
            setTextInputVisible(false);
            setOtherAnswer('');
        }
    };

    return ( <></>
        // <HStack {...group}>
        //     {options.map((value) => {
        //         const radio = getRadioProps({ value })
        //         return (
        //             <RadioCard key={value} {...radio}>
        //                 {value}
        //             </RadioCard>
        //         )
        //     })}
        // </HStack>
        // <form className={styles.form} onSubmit={sendEmail}>
        //     <div className={styles.row}>
        //         <div className={styles.field}>
        //             <label htmlFor="firstName">First Name:</label>
        //             <input
        //                 id="firstName"
        //                 type="text"
        //                 value={firstName}
        //                 onChange={(event) => setFirstName(event.target.value)}
        //             />
        //         </div>
        //         <div className={styles.field}>
        //             <label htmlFor="lastName">Last Name:</label>
        //             <input
        //                 id="lastName"
        //                 type="text"
        //                 value={lastName}
        //                 onChange={(event) => setLastName(event.target.value)}
        //             />
        //         </div>
        //     </div>
        //
        //     <div className={styles.row}>
        //         <div className={styles.field}>
        //             <label>Question:</label>
        //             <div className={styles.radioGroup}>
        //                 <label>
        //                     <input
        //                         type="radio"
        //                         value="yes"
        //                         checked={answer === 'yes'}
        //                         onChange={handleAnswerChange}
        //                     />
        //                     Yes
        //                 </label>
        //                 <label>
        //                     <input
        //                         type="radio"
        //                         value="no"
        //                         checked={answer === 'no'}
        //                         onChange={handleAnswerChange}
        //                     />
        //                     No
        //                 </label>
        //                 <label>
        //                     <input
        //                         type="radio"
        //                         value="other"
        //                         checked={answer === 'other'}
        //                         onChange={handleAnswerChange}
        //                     />
        //                     Other
        //                 </label>
        //             </div>
        //         </div>
        //     </div>
        //
        //     {textInputVisible && (
        //         <div className={styles.row}>
        //             <div className={styles.field}>
        //                 <label htmlFor="otherAnswer">Other Answer:</label>
        //                 <input
        //                     id="otherAnswer"
        //                     type="text"
        //                     value={otherAnswer}
        //                     onChange={(event) => setOtherAnswer(event.target.value)}
        //                 />
        //             </div>
        //         </div>
        //     )}
        //
        //     <div className={styles.row}>
        //         <div className={styles.field}>
        //             <label>Single Choice:</label>
        //             <div className={styles.radioGroup}>
        //                 <label>
        //                     <input type="radio" name="choice" value="option1" />
        //                     Option 1
        //                 </label>
        //                 <label>
        //                     <input type="radio" name="choice" value="option2" />
        //                     Option 2
        //                 </label>
        //                 <label>
        //                     <input type="radio" name="choice" value="option3" />
        //                     Option 3
        //                 </label>
        //             </div>
        //         </div>
        //     </div>
        //
        //     <div className={styles.row}>
        //         <div className={styles.field}>
        //             <label>Submit:</label>
        //             <button type="submit">Submit</button>
        //         </div>
        //     </div>
        // </form>
        // // <form ref={form} onSubmit={sendEmail} style={{marginBottom: 16}}>
        // //     <label>Name</label>
        // //     <input className={'inputMehehe'} type="text" name="name" onChange={(e) => {
        // //         setFirstName(e.target.value)
        // //     }
        // //     } />
        // //     <label>Email</label>
        // //     <input type="email" name="user_email" onChange={(e) => {
        // //         setFirstName(e.target.value)
        // //     }
        // //     } />
        // //     <label>Message</label>
        // //     <textarea name="message" onChange={(e) => {
        // //         setFirstName(e.target.value)
        // //     }
        // //     } />
        // //     <input type="submit" value="Send" />
        // // </form>
    );
};
