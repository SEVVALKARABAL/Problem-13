import { useState } from 'react'

// Bu form bileşeninde bir kullanıcının adını, soyadını ve saat dilimini girmesi isteniyor. 
// 1. Formun hemen yanında adı, soyadı ve saat dilimini görüntüleyin (örn. "Adınız: Namık, Soyadınız: Korona, Zaman Dilimi: Doğu Standart Saati").
// 2. Ad, soyad veya saat dilimi alanlarından herhangi biri boş bırakıldığında "Kaydet" butonunu devre dışı bırakın.
// 3. Zaman dilimi seçimi için daha fazla seçenek ekleyin ve bu seçeneklerin daha kullanıcı dostu bir görünüme sahip olmasını sağlayın.
// 4. Form alanlarına girilen değerlerin görsel geri bildirimini sağlamak için Tailwind ile aşağıdaki düzenlemeleri yapın: 
//    - Form alanlarına doğru değer girildiğinde (örneğin boş değilse) yeşil bir kenar çizgisi gösterin.
//    - Form alanları boş bırakıldığında veya yanlış değer girildiğinde kırmızı bir kenar çizgisi gösterin.
// 5. "Kaydet" butonuna tıklandığında, doldurulan bilgileri console.log ile görüntüleyin.
// Bonus: Responsive tasarım için, mobil cihazlarda formun alanlarını dikey bir düzene göre hizalayın.

export default function PersonalInfo() {
  return (
    <div className='bg-gray-800 h-screen divide-y divide-white/5'>
      <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-white'>
            Adı Soyadı
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-400'>Zaman Dilimi</p>
        </div>

        <form className='md:col-span-2'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-white'
              >
                Adınız
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  onChange={(event) => {
                    console.log(event.target.value)
                  }}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-white'
              >
                Soyadınız
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='timezone'
                className='block text-sm font-medium leading-6 text-white'
              >
                Zaman Dilimi
              </label>
              <div className='mt-2'>
                <select
                  id='timezone'
                  name='timezone'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option>Pasifik Standart Saati</option>
                  <option>Doğu Standart Saati</option>
                  <option>Greenwich Ortalama Saati</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mt-8 flex'>
            <button
              type='submit'
              className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
