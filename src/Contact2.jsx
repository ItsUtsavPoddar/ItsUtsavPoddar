const Contact2 = () => {
  return (
    <section
      className="w-full py-8 md:py-14 lg:py-22
    "
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter pb-7 md:text-4xl">
            Connect with Me
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-24">
            <a
              className="flex items-center space-x-2 text-gray-50 hover:text-gray-500 "
              href="#"
            >
              <TwitterIcon className="h-6 w-6" />
              <span>X</span>
            </a>
            <a
              className="flex items-center space-x-2 text-gray-50 hover:text-gray-500"
              href="#"
            >
              <LinkedinIcon className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
            <a
              className="flex items-center space-x-2 text-gray-50 hover:text-gray-500"
              href="#"
            >
              <GithubIcon className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a
              className="flex items-center space-x-2 text-gray-50 hover:text-gray-500"
              href="#"
            >
              <InstagramIcon className="h-6 w-6" />
              <span>Instagram</span>
            </a>
            <a
              className="flex items-center space-x-2 text-gray-50 hover:text-gray-500"
              href="#"
            >
              <MailIcon className="h-6 w-6" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact2;

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
