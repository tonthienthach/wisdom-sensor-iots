import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./background.jpg');
    background-size: cover;
    background-position: center;
`

const ChangePasswordContainer = styled.div`
    width: 100%;
    max-width: 600px;
    height: 700px;
    padding: 20px;
    background: #ffffff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const ChangePasswordText = styled.p`
    font-size: 24px;
    text-align: center;
    margin-bottom: 30px;
`

const InputGroup = styled.div`
    position: relative;
    width: 100%;
`

const InputIcon = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    pointer-events: none;
`

const InputIconRight = styled(InputIcon)`
    right: 10px;
    left: auto;
    cursor: pointer;
`

const FormInput = styled.input`
    padding-left: 40px;
    padding-right: 40px;
    border: 1px solid #ccc;
`

const Button = styled.button`
    width: 100%;
    background: #007bff;
    border: none;
    color: white;
    font-size: 16px;
    padding: 15px;
    cursor: pointer;
`

function ChangePasswordPage() {
    return (
        <Container>
            <ChangePasswordContainer>
                <ChangePasswordText>Change your password</ChangePasswordText>
                <InputGroup className='mb-3'>
                    <InputIcon>
                        <i className='fa fa-lock' />
                    </InputIcon>
                    <FormInput
                        className='form-control'
                        id='new-password'
                        type='password'
                        placeholder='New password'
                    />
                    <InputIconRight>
                        <i className='fa fa-eye toggle-password' data-toggle='new-password' />
                    </InputIconRight>
                </InputGroup>
                <InputGroup className='mb-3'>
                    <InputIcon>
                        <i className='fa fa-lock' />
                    </InputIcon>
                    <FormInput
                        className='form-control'
                        id='confirm-password'
                        type='password'
                        placeholder='Re-enter new password'
                    />
                    <InputIconRight>
                        <i className='fa fa-eye toggle-password' data-toggle='confirm-password' />
                    </InputIconRight>
                </InputGroup>
                <Button id='confirmPasswordBtn'>Confirm Password</Button>
            </ChangePasswordContainer>
        </Container>
    )
}

export default ChangePasswordPage
