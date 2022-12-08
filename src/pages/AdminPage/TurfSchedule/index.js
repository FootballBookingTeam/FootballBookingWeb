import {
    Eventcalendar,
    getJson,
    setOptions,
    CalendarNav,
    SegmentedGroup,
    SegmentedItem,
    CalendarPrev,
    CalendarToday,
    CalendarNext,
} from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.scss';
import { useState, useEffect } from 'react';

setOptions({
    theme: 'ios',
    themeVariant: 'light',
});

function TurfSchedule() {
    const [view, setView] = useState('month');
    const [myEvents, setEvents] = useState([]);

    useEffect(() => {
        getJson(
            'https://trial.mobiscroll.com/events/?vers=6',
            (events) => {
                setEvents(events);
            },
            'jsonp',
        );
    }, []);

    const [calView, setCalView] = useState({
        calendar: { labels: true },
    });

    const changeView = (event) => {
        let calView;

        switch (event.target.value) {
            case 'year':
                calView = {
                    calendar: { type: 'year' },
                };
                break;
            case 'month':
                calView = {
                    calendar: { labels: true },
                };
                break;
            case 'week':
                calView = {
                    schedule: { type: 'week' },
                };
                break;
            case 'day':
                calView = {
                    schedule: { type: 'day' },
                };
                break;
            case 'agenda':
                calView = {
                    calendar: { type: 'week' },
                    agenda: { type: 'week' },
                };
                break;
        }

        setView(event.target.value);
        setCalView(calView);
    };

    const customWithNavButtons = () => {
        return (
            <>
                <CalendarNav className="cal-header-nav" />
                <div className="cal-header-picker">
                    <SegmentedGroup value={view} onChange={changeView}>
                        <SegmentedItem value="year">Year</SegmentedItem>
                        <SegmentedItem value="month">Month</SegmentedItem>
                        <SegmentedItem value="week">Week</SegmentedItem>
                        <SegmentedItem value="day">Day</SegmentedItem>
                        <SegmentedItem value="agenda">Agenda</SegmentedItem>
                    </SegmentedGroup>
                </div>
                <CalendarPrev className="cal-header-prev" />
                <CalendarToday className="cal-header-today" />
                <CalendarNext className="cal-header-next" />
            </>
        );
    };

    return (
        <Eventcalendar renderHeader={customWithNavButtons} height={1000} view={calView} data={myEvents} cssClass="md-switching-view-cont" />
    );
}
export default TurfSchedule;
