import { CircularProgress } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className="text-center">
      <CircularProgress
        variant="dotted"
        color="#316acc"
        size="large"
        text=""
        textColor=""
      />
    </div>
  )
}

export default Loading
