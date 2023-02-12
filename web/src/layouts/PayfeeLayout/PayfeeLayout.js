import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const PayfeeLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}) => {

  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 1000 }} />
      <header className="rw-header flex justify-center">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="rw-link">
            {title}
          </Link>
        </h1>
      </header>
      <main className="rw-main text-white">{children}</main>
    </div>
  )
}

export default PayfeeLayout
