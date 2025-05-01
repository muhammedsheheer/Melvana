'use client'

const Contact = ({ }) => {

    return (
        <section id="ora" className="flex w-full items-center justify-center bg-transparent">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2144.2219811593013!2d-2.4645106!3d53.5677203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba75750cbd5b9%3A0xfcde2517b593e215!2sMevlana%2C%20Bolton!5e1!3m2!1sen!2sin!4v1746102330021!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[350px] invert grayscale"
            ></iframe>
        </section>
    )
}

export default Contact