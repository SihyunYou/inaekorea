import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SlideInSection from './SlideInSection';

export default function StepSection({ step, title, imageSrc, imagePosition = 'left', descriptionList, imageWidth }) {
    const isImageLeft = imagePosition === 'left';

    return (
        <Container style={{ margin: '10vh 0' }}>
            <Row>
                {isImageLeft && (
                    <Col lg="6" md="12">
                        <SlideInSection imageSrc={imageSrc} width={imageWidth} />
                    </Col>
                )}
                <Col
                    lg="6"
                    md="12"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: isImageLeft ? 'left' : 'right',
                        marginBottom: '50px',
                    }}
                >
                    <h5 style={{ marginTop: '30px', marginBottom: '10px' }}>
                        <strong>&nbsp;&nbsp;STEP {step}.</strong> {title}
                    </h5>
                    <h6 style={{ margin: 0, whiteSpace: 'normal', wordBreak: 'keep-all', overflowWrap: 'break-word', lineHeight: '1.5' }}>

                            {descriptionList.map((item, idx) => (
                                <>
                                    {isImageLeft && (<span>•&nbsp;&nbsp;</span>)}
                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                    {!isImageLeft && (<span>&nbsp;&nbsp;•</span>)}
                                    <br />
                                </>
                            ))}
                    </h6>
                </Col>
                {!isImageLeft && (
                    <Col lg="6" md="12">
                        <SlideInSection imageSrc={imageSrc} width={imageWidth} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}
