import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CButton,
  CFormCheck,
  CImage,
} from '@coreui/react'
import React from 'react'
import loginImg from '../mocks/imgs/large-anak-sekolah-bawean.png'
import tutWuri from '../mocks/imgs/tut-wuri.png'
import { imageText } from '../mocks/data/loginText'

export default function Login() {
  const handleClickLogin = (event) => {
    event.preventDefault()

    alert('its clicked yeay')
  }
  return (
    <>
      <CRow className='h-100'>
        <CCol md={4} className='p-4'>
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
          <CForm className='m-4 form' onSubmit={(e) => handleClickLogin(e)}>
            <CFormLabel htmlFor='inputEmail'>Email</CFormLabel>
            <CFormInput
              type='email'
              id='inputEmail'
              placeholder='nama@gmail.com'
            />
            <CFormLabel htmlFor='inputPassword'>Password</CFormLabel>
            <CFormInput
              type='password'
              id='inputPassword'
              placeholder='**********'
            />
            <CRow>
              <CCol>
                <CFormCheck label='Remember me' id='rememberMe' />
              </CCol>
              <CCol className='text-end'>
                <a href=''>forget password</a>
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

        <CCol md={8} className='p-0'>
          <div
            className=' background-image text-white vh-100'
            style={{ backgroundImage: `url(${loginImg})` }}>
            <div
              className='mask h-100 d-flex align-items-end justify-content-end'
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <div className='text-end m-5'>
                <h2 className='text-uppercase'> {imageText.header} </h2>
                <h3> {imageText.address} </h3>
                <h4> Telepon : {imageText.telepon} </h4>
              </div>
            </div>
          </div>
        </CCol>
      </CRow>
    </>
  )
}
