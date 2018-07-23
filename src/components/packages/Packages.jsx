import React from 'react';
import './packages.css';
import Head from '../head/Head';

export default function packages() {
    return (
        <div className="packages-main">
            <Head />
            <div className="table-container">
                <div className="table-column-1">
                    <div className="column-1-head">
                        White Package
                    </div>
                    <div className="column-1-split">
                        <div className="column-1-workout">
                            <div className="column-1-item-head">Workout/Skills</div>
                            <div className="column-1-item">•One Session</div>
                            <div className="column-1-item">•One Camera</div>
                            <div className="column-1-item">•One GoPro</div>
                            <div className="column-1-item">•One minute video</div>
                            <div className="column-1-item-foot">$300</div>
                        </div>
                        <div className="column-1-game">
                            <div className="column-1-item-head">Game Footage</div>
                            <div className="column-1-item">•20 plays/provided footage</div>
                            <div className="column-1-item">•video editing</div>
                            <div className="column-1-item">•info card</div>
                            <div className="column-1-item">•3-5 min. video</div>
                            <div className="column-1-item-foot">$250</div>
                        </div>
                    </div>
                </div>
                <div className="table-column-2">
                    <div className="column-2-head">
                        Black Package
                </div>
                    <div className="column-2-split">
                        <div className="column-2-workout">
                            <div className="column-2-item-head">Workout/Skills</div>
                            <div className="column-2-item">One Session</div>
                            <div className="column-2-item">One Camera</div>
                            <div className="column-2-item">One GoPro</div>
                            <div className="column-2-item">One Drone</div>
                            <div className="column-2-item">One minute video</div>
                            <div className="column-2-item-foot">$450</div>
                        </div>
                        <div className="column-2-game">
                            <div className="column-2-item-head">Game Footage</div>
                            <div className="column-2-item">20 plays</div>
                            <div className="column-2-item">videographer @ 1 game</div>
                            <div className="column-2-item">video editing</div>
                            <div className="column-2-item">info card</div>
                            <div className="column-2-item">3-5 min. video</div>
                            <div className="column-2-item-foot">$500</div>
                        </div>
                    </div>
                </div>
                <div className="table-column-3">
                    <div className="column-3-head">
                        Gold Package
                    </div>
                    <div className="column-3-split">
                        <div className="column-3-workout">
                            <div className="column-3-item-head">Workout/Skills</div>
                            <div className="column-3-item">One Session</div>
                            <div className="column-3-item">One Camera</div>
                            <div className="column-3-item">One GoPro</div>
                            <div className="column-3-item">One Drone</div>
                            <div className="column-3-item">three minute video</div>
                            <div className="column-3-item">player/coach interview</div>
                            <div className="column-3-item-foot">$600</div>
                        </div>
                        <div className="column-3-game">
                            <div className="column-3-item-head">Game Footage</div>
                            <div className="column-3-item">20 plays</div>
                            <div className="column-3-item">videographer @ 2 games</div>
                            <div className="column-3-item">video editing</div>
                            <div className="column-3-item">info card</div>
                            <div className="column-3-item">3-5 min. video</div>
                            <div className="column-3-item-foot">$750</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}