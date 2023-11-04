const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <div className="bg-[#112240] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-textGreen">
            Contact Me
          </h2>
          <div className="w-full sm:w-3/4 mx-auto bg-[#112240] p-8 rounded-lg shadow-navbarShadow">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-textGreen text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-sky-500 bg-bodyColor rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-textGreen text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-sky-500 bg-bodyColor rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-textGreen text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-sky-500 bg-bodyColor rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto text-textGreen">
        <p>All rights reserved by &copy; Apel Mahmud 2023</p>
      </div>
    </section>
  );
};

export default Contact;
