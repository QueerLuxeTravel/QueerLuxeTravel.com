import React from 'react';

const Contact = () => {
  return (
    <div className="bg-background text-text">
      <header className="hero-section relative h-screen">
        <img src="/path/to/contact.jpg" alt="Contact Image" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Let's Connect</h1>
          <p className="text-lg md:text-2xl mt-4 text-secondary">Whether you have questions, need assistance, or just want to say hi, we're here for you.</p>
        </div>
      </header>
      <section className="contact-form py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
          <p className="text-lg text-secondary mt-4">Fill out the form below and we'll get back to you as soon as possible.</p>
          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-secondary">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-secondary">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-secondary">Message</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-primary transition duration-300">Submit</button>
          </form>
        </div>
      </section>
      <section className="contact-info py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary">Reach Out to Us</h2>
          <p className="text-lg text-secondary mt-4">We're always here to help. Feel free to contact us via email, phone, or social media.</p>
          <div className="mt-8">
            <p className="text-secondary">Email: info@queerluxetravel.com</p>
            <p className="text-secondary">Phone: +1 (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-accent hover:text-primary transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.826v-9.294H9.688v-3.622h3.138V8.808c0-3.099 1.843-4.777 4.575-4.777 1.313 0 2.66.235 2.66.235v3.357h-1.929c-1.5 0-1.795.714-1.795 1.764v2.31h3.071l-.504 3.179h-2.671v9.294H22.675c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="text-accent hover:text-primary transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.998 4.556a10.45 10.45 0 01-.287.649 4.902 4.902 0 002.336-2.956 10.477 10.477 0 01-3.1 1.194 4.902 4.902 0 00-8.306 4.373 4.902 4.902 0 01-8.306-4.373 10.477 10.477 0 01-3.1-1.194c.706-.66 3.66-2.729 3.975-2.966a10.45 10.45 0 0113.977 8.586 10.518 10.518 0 01-2.228 6.682 4.813 4.813 0 00-.225.078c-.64.02-1.306-.149-1.883-.422a4.828 4.828 0 00-3.59 1.314 4.828 4.828 0 01-3.59-1.314 4.813 4.813 0 00-1.883.422c-.664.279-1.33.429-1.966.429a4.813 4.813 0 00-.225-.078 10.518 10.518 0 01-2.228-6.682 10.45 10.45 0 0113.977-8.586zM11.998 20c-4.411 0-8-1.756-8-4 0-.477.055-.943.157-1.396 4.358-1.436 8-4.804 8-8.956 0-4.411-1.756-8-4-8s4 1.756 4 4c0 4.152-3.648 7.52-8 8.956a10.003 10.003 0 00-.157 1.396c0 2.244 1.756 4 4 4z" />
                </svg>
              </a>
              <a href="#" className="text-accent hover:text-primary transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.914 4.914 0 002.165-2.729 9.829 9.829 0 01-3.127 1.195 4.914 4.914 0 00-8.399 4.373 4.914 4.914 0 01-8.399-4.373 9.829 9.829 0 01-3.127-1.195c.92-.865 4.83-3.233 5.194-3.598a9.828 9.828 0 0114.388 8.586 9.88 9.88 0 01-2.356 6.682 4.857 4.857 0 00-.236.088c-.714.029-1.452-.159-2.103-.456a4.857 4.857 0
