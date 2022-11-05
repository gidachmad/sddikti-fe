import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CButton,
  CFormCheck,
  CImage,
  CInputGroup,
} from '@coreui/react'
import React, { useState } from 'react'
import loginImg from '../../../assets/images/large-anak-sekolah-bawean.png'
import tutWuri from '../../../assets/images//tut-wuri.png'
import { imageText } from '../../../assets/mocks/data/loginText'
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons'
import AuthService from '../../api/auth.services'

export default function Login() {
  // controlled form
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // password form state
  const [showPass, setShowPass] = useState(false)
  const [passType, setPassType] = useState('password')

  const clickSee = () => {
    setShowPass(!showPass)
    showPass ? setPassType('password') : setPassType('text')
  }

  const usernameOnChange = (event) => {
    setUsername(event.target.value)
  }

  const passOnChange = (event) => {
    setPassword(event.target.value)
  }

  const handleClickLogin = (event) => {
    event.preventDefault()
    if (!username && !password) {
      return
    }

    AuthService.login(username, password).then(
      () => {
        alert('anda berhasil login')
      },
      (error) => {
        alert(error)
      }
    )
  }
  return (
    <>
      <CRow className='h-100'>
        <CCol lg={{ span: 8, order: 2 }} className='p-0'>
          <div
            className=' background-image text-white vh-100'
            style={{ backgroundImage: `url(${loginImg})` }}>
            <div
              className='mask h-100 d-flex align-items-center justify-content-center align-items-lg-end justify-content-lg-end '
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <div className='text-center text-lg-end m-5'>
                <h2 className='text-uppercase'> {imageText.header} </h2>
                <h3> {imageText.address} </h3>
                <h4> Telepon : {imageText.telepon} </h4>
              </div>
            </div>
          </div>
        </CCol>
        <CCol lg={{ span: 4, order: 1 }} className='p-4'>
          <div className='text-center'>
            <CImage
              src={tutWuri}
              alt='Logo Tut Wuri Handayani'
              className='text-center'
            />
            <h2>Selamat Datang!</h2>
          </div>

          <h1>Masuk</h1>
          <p className='text-info'>Silakan masuk untuk melanjutkan</p>
          <CForm className='m-4 form' onSubmit={handleClickLogin}>
            <CCol className='position-relative'>
              <CFormInput
                label='Username'
                type='text'
                id='inputUsername'
                placeholder='Username'
                value={username}
                onChange={usernameOnChange}
              />
            </CCol>
            <CFormLabel htmlFor='inputPassword'>Password</CFormLabel>
            <CInputGroup className='has-validation'>
              <CFormInput
                type={passType}
                id='inputPassword'
                placeholder='**********'
                value={password}
                onChange={passOnChange}
              />
              <CButton
                onClick={clickSee}
                type='button'
                color='secondary'
                variant='outline'>
                {showPass ? <EyeSlashFill size={24} /> : <EyeFill size={24} />}
              </CButton>
            </CInputGroup>
            <CRow>
              <CCol>
                <CFormCheck label='Ingat Saya' id='rememberMe' />
              </CCol>
              <CCol className='text-end'>
                <a href='#'>Lupa Password</a>
              </CCol>
            </CRow>
            <CButton type='submit' className='w-100 btn btn-primary'>
              Masuk
            </CButton>
            <p>
              Belum memiliki akun?
              <span>
                <a href='#'> buat Akun </a>
              </span>
            </p>
          </CForm>
        </CCol>
      </CRow>
    </>
  )
}
