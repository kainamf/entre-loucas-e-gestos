import { EVENT_LINK } from '../constants';


function EventButton() {
    return (
        <div className="fixed bottom-7 right-3 sm:right-6 z-50">
            <a
                href={EVENT_LINK}
                target="_blank"
                className="bg-[#0DB1F4] hover:bg-blue-700 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none"
            >
                <span className="flex items-center justify-center" style={{ width: 28, height: 28 }}>
                    <img src="/assets/icons/uticket.png" alt="Ticket" width={28} height={28} />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-semibold text-sm sm:text-base">COMPRE JÁ!</span>
                </div>
            </a>
        </div>
    );
}

export default EventButton;
