import { Button, TextField } from '@mui/material'
import './verifyEmail.css'
import { useState } from 'react'

function VerifyEmail() {
    const [otp, setOtp] = useState(Array(6).fill(''))
    const handleInput = (e, index) => {
        const newOtp = [...otp]
        newOtp[index] = e.target.value
        setOtp(newOtp)
        if (e.target.value && index < 5) {
            const nextField = document.getElementById(`otp-${index + 1}`)
            if (nextField) {
                nextField.focus()
            }
        }
    }
    return (
        <div>
            <div className='background'>
                <div className='verify-container'>
                    <div className='verify'>
                        <h1>Verify Email</h1>
                        <h2>We have sent the code to your Email address</h2>
                        <h3>danh*****@gmail.com</h3>
                        <div className='otp-field mb-4'>
                            {otp.map((value, index) => (
                                <TextField
                                    key={index}
                                    variant='outlined'
                                    value={value}
                                    onChange={e => handleInput(e, index)}
                                    inputProps={{
                                        maxLength: 1,
                                        id: `otp-${index}`,
                                    }}
                                />
                            ))}
                        </div>
                        <Button
                            variant='contained'
                            color='primary'
                            className='mb-3 buttonverify'
                            style={{ padding: '10px 50px' }}
                        >
                            Verify Code
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            className='mb-3 buttonsendAgain'
                        >
                            Send Again
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerifyEmail
