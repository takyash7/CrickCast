import streamlit as st

# Streamlit page config MUST be first
st.set_page_config(page_title="CriCast")

from streamlit_option_menu import option_menu
import os
from dotenv import load_dotenv

load_dotenv()

# Import your app modules
import win_prediction
import about
import score_prediction
import match
import score


class MultiApp:

    @staticmethod
    def run():

        with st.sidebar:
            app = option_menu(
                menu_title='CriCast',
                options=[
                    'Score Prediction',
                    'Win Prediction',
                    'UpComing Matches',
                    'Live Score',
                    'About'
                ],
                icons=[
                    'graph-up-arrow',
                    'award-fill',
                    'calendar-event-fill',
                    'tv',
                    'info-circle-fill'
                ],
                menu_icon='trophy-fill',
                default_index=0,
                styles={
                    "container": {
                        "padding": "5!important",
                        "background-color": 'black'
                    },
                    "icon": {
                        "color": "white",
                        "font-size": "23px"
                    },
                    "nav-link": {
                        "color": "white",
                        "font-size": "20px",
                        "text-align": "left",
                        "margin": "0px",
                        "--hover-color": "red"
                    },
                    "nav-link-selected": {
                        "background-color": "#02ab21"
                    },
                }
            )

        if app == "Score Prediction":
            score_prediction.app()

        elif app == "Win Prediction":
            win_prediction.app()

        elif app == "UpComing Matches":
            match.app()

        elif app == "Live Score":
            score.app()

        elif app == "About":
            about.app()


if __name__ == "__main__":
    MultiApp.run()