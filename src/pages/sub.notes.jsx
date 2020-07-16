import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAFolder } from '../redux/actions/file'

const SubNotes = props => {
    let { level, root } = useParams()

    useEffect(() => {
        props.fetchFiles(level, root)
    },[])
    return (
        <div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        files: state.file.files
    }
}

const mapDispatchToprops = dispatch => {
    return {
        fetchFiles: (level, root) => { dispatch(getAFolder(level, root)) }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(SubNotes)