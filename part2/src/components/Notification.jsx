import '../../src/index.css'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  let notificationClass = ''
  if (type === 'none') {
    notificationClass = 'none'
  } else if (type === 'update') {
    notificationClass = 'update'
  } else {
    notificationClass = 'error'
  }

  return (
    <div className={notificationClass}>
      {message}
    </div>
  )
}

export default Notification