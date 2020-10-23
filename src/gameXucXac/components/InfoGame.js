import React, { Component } from 'react'

export default class InfoGame extends Component {
    render() {
        return (
            <div>
                <div className="display-4 ">
                    BẠN CHỌN: <span className="text-danger">1</span>
                </div>
                <div className="display-4 ">
                    BÀN THẮNG: <span className="text-success">1</span>
                </div>
                <div className="display-4 ">
                    TỔNG SỐ BÀN CHƠI: <span className="text-primary">1</span>
                </div>
            </div>
        )
    }
}
