import {Box, Divider, Flex, Spinner} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const active = "website-breeze__rsvp-form-radio_active";

const Attendance = {
    Coming: "Dolazim :D",
    Not_Coming: "Ne dolazim :(",
    Empty: "Nisam ispunio..",
};

const Transport = {
    Yes: "Trebam prijevoz :)",
    No: "Ne trebam prijevoz",
    Empty: "Nisam ispunio..",
};

const Success = {
    SUCCESS: 'Hvala ti na odgovoru :)',
    ERROR: 'Došlo je do greške, pokušaj ponovo :(',
    IDLE: false
};

export const ContactForm = () => {
    const form = useRef();

    const [isAttending, setIsAttending] = useState(Attendance.Empty);
    const [transport, setTransport] = useState(Transport.Empty);
    const [restrictions, setRestrictions] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [numOfGuests, setNumOfGuests] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState({
        name: false,
        lastName: false,
        attendance: false,
        transport: false,
        restrictions: false,
        guests: false
    })


    const [success, setSuccess] = useState(Success.IDLE)
    const [loading, setLoading] = useState(false)


    const sendEmail = () => {
        emailjs.send('service_y43m3zo', 'template_24gvkdo', {name: firstName, lastName, message, attendance: isAttending, transport, numOfGuests, restrictions: restrictions ? "IMAM" : 'Nemam'}, 'q7fXFIVo9fuvo6Nwx')
            .then((result) => {
                setSuccess(Success.SUCCESS)
                setLoading(false)
            }, (error) => {
                setSuccess(Success.ERROR)
                setLoading(false)
            });
    };

    const validation = () => {
        setError({
            name: !firstName,
            lastName: !lastName,
            attendance: isAttending === Attendance.Empty,
            transport: transport === Transport.Empty,
            guests : isAttending === Attendance.Coming && numOfGuests <= 0
        })

        if (!firstName ||
            !lastName ||
        isAttending === Attendance.Empty ||
        transport === Transport.Empty ||
        isAttending === Attendance.Coming && numOfGuests <= 0)
        return; else {
            setLoading(true)
            sendEmail()
        }
    }

    return (!loading ?
            (<Box>
                <Divider w={'75%'} h={'1px'} bgColor={'white'} mt={'32px'} mb={'32px'}></Divider>
            {success === Success.IDLE ? (<Box>
                <form className="website-breeze__rsvp-form" ref={form}>
                    <Box className="website-breeze__rsvp-form-two">
                        <label style={{color: error.name ? '#c54040' : undefined}}  className="website-breeze__rsvp-form-label website-breeze__rsvp-form-label-short website-breeze__rsvp-form-extra" >
                            Ime *
                            <input
                                style={{borderColor: error.name ? '#c54040' : undefined}}
                                required
                                id="websiteFirstName"
                                className="website-breeze__rsvp-form-input"
                                type="text"
                                maxLength={125}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                name={'name'}
                            />
                        </label>
                        <label style={{color: error.lastName ? '#c54040' : undefined}} className="website-breeze__rsvp-form-label website-breeze__rsvp-form-label-short website-breeze__rsvp-form-extra">
                            Prezime *
                            <input
                                style={{borderColor: error.lastName ? '#c54040' : undefined}}
                                required
                                id="websiteLastName"
                                className="website-breeze__rsvp-form-input"
                                type="text"
                                maxLength={125}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
                                name={'lastName'}
                            />
                        </label>

                    </Box>
                    <Box>
                        <label style={{color: error.attendance ? '#c54040' : undefined}} className="website-breeze__rsvp-form-label">
                            Planirate li doći na vjenčanje? *
                        </label>
                        <br />
                        <Box
                            className={`website-breeze__rsvp-form-radio ${
                                isAttending === Attendance.Coming ? active : ""
                            }`}
                            alignItems={"center"}
                        >
                            <Box
                                name={'attendance'}
                                className="website-breeze__rsvp-form-radio-element"
                                onClick={() => {
                                    setIsAttending(Attendance.Coming);
                                }}
                            />
                            Da
                        </Box>
                        <Box
                            name={'attendance'}
                            className={`website-breeze__rsvp-form-radio ${
                                isAttending === Attendance.Not_Coming ? active : ""
                            }`}
                            alignItems={"center"}
                            onClick={() => {
                                setIsAttending(Attendance.Not_Coming);
                            }}
                        >
                            <Box className="website-breeze__rsvp-form-radio-element" />
                            Ne
                        </Box>
                        {isAttending === Attendance.Coming ? (
                            <Box className="website-breeze__rsvp-form">
                                <label style={{color: error.guests ? '#c54040' : undefined}} className="website-breeze__rsvp-form-label website-breeze__rsvp-form-label-fill">
                                    Koliko vas planira doći? *
                                    <br />
                                    <input
                                        type={"number"}
                                        id="websiteComment"
                                        className="website-breeze__rsvp-form-input"
                                        rows={1}
                                        defaultValue={""}
                                        onChange={(e)=> {
                                            console.log(e.target.value)
                                            setNumOfGuests(e.target.value)
                                        }}
                                        style={{ width: "50px", marginBottom: "-8px" }}
                                    />
                                </label>
                            </Box>
                        ) : null}
                        <br />
                        <br />
                    </Box>
                    <Box>
                        <label style={{color: error.transport ? '#c54040' : undefined}} className="website-breeze__rsvp-form-label">
                            Jeste li zainteresirani za organizirani prijevoz? *
                        </label>
                        <br />
                        <Box
                            className={`website-breeze__rsvp-form-radio ${
                                transport === Transport.Yes ? active : ""
                            }`}
                            alignItems={"center"}
                        >
                            <Box
                                className="website-breeze__rsvp-form-radio-element"
                                onClick={() => {
                                    setTransport(Transport.Yes);
                                }}
                            />
                            Da
                        </Box>
                        <Box
                            className={`website-breeze__rsvp-form-radio ${
                                transport === Transport.No ? active : ""
                            }`}
                            alignItems={"center"}
                            onClick={() => {
                                setTransport(Transport.No);
                            }}
                        >
                            <Box className="website-breeze__rsvp-form-radio-element" />
                            Ne
                        </Box>
                        {Transport === Transport.Yes ? (
                            <Box className="website-breeze__rsvp-form">
                                <label className="website-breeze__rsvp-form-label website-breeze__rsvp-form-label-fill">
                                    Koliko vas planira doći?
                                    <br />
                                    <input
                                        type={"number"}
                                        id="websiteComment"
                                        className="website-breeze__rsvp-form-input"
                                        rows={1}
                                        defaultValue={""}
                                        style={{ width: "50px", marginBottom: "-8px" }}
                                    />
                                </label>
                            </Box>
                        ) : null}
                        <br />
                        <br />
                    </Box>
                    <Box
                        className={`website-breeze__rsvp-form-radio ${
                            restrictions ? active : ""
                        }`}
                        alignItems={"center"}
                        onClick={() => {
                            setRestrictions(old => !old);
                        }}
                    >
                        <Box className="website-breeze__rsvp-form-radio-element" />
                        Imate li kakvih dijetalnih restrikcija (npr. alergije, intolerancije)?
                    </Box>

                    <br />
                    <br />
                    <Box className="website-breeze__rsvp-form">
                        <label className="website-breeze__rsvp-form-label website-breeze__rsvp-form-label-fill">
                            Komentari ili pitanja <br />
                            <textarea
                                id="websiteComment"
                                className="website-breeze__rsvp-form-input"
                                rows={4}
                                defaultValue={""}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}
                                name={'message'}
                            />
                        </label>
                        <br />
                        <br />
                        <Box
                            className={"website-breeze__rsvp-form-submit"}
                            onClick={validation}
                        >
                            Pošalji
                        </Box>
                    </Box>
                </form>

            </Box>) : <Box justifyContent={'center'} alignItems={'center'} w={'100%'} mb={'16px'}>

                <div >
                    {success === Success.SUCCESS ? Success.SUCCESS : Success.ERROR}
                </div>
            </Box>}
        </Box> ) : <Spinner style={{width: '50px', height: '50px', marginTop: '50px'}}/>
    );

};
