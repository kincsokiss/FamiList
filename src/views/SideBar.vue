<template>
    <ion-menu content-id="main-content" class="is-expanded">
      <ion-header>
        <ion-toolbar>
            <ion-icon :icon="listCircleOutline" size="large" class="logo"></ion-icon>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div class="menu">
            <nav>
                <div id="nav">
                    <router-link to="/" class="button">
                        <ion-icon :icon="homeOutline" class="material"></ion-icon>
                        <span class="text">Home Page</span>
                    </router-link>
                </div>
            </nav>

            <nav>
                <div id="nav">
                    <router-link to="/user-settings" class="button">
                        <ion-icon :icon="settingsOutline" class="material"></ion-icon>
                        <span class="text">User Settings</span>
                    </router-link>
                </div>
            </nav>
        </div>
      </ion-content>
    </ion-menu>
    <!-- <ion-menu :class="{'is-expanded' : is_expanded}">

        <div class="menu-toggle-wrap">
            <button size="small" class="menu-toggle" @click="toggleMenu">
                <ion-icon :icon="chevronForwardOutline" class="material"></ion-icon>
            </button>
        </div> 

        
    </ion-menu> -->
</template>

<script>
    import { listCircleOutline, settingsOutline, chevronForwardOutline, homeOutline } from 'ionicons/icons';

    export default ({
        name: "SideBar",

        data() {
            return {
                is_expanded: false
            };
        },  

        methods: {
            toggleMenu() {
                this.is_expanded = !this.is_expanded;
            }
        },

        setup() {
            return { listCircleOutline, settingsOutline, homeOutline, chevronForwardOutline };
        },
    });

</script>

<style lang="scss" scoped>

    ion-menu {
        // display: flex;
        // flex-direction: column;
        // width: calc(2rem + 32px);
        // min-height: 100vh;
        // overflow: hidden;
        // padding: 1rem;

        ion-content {
            #background-content{
                background-color: #334155 !important;
                color: #f1f5f9;
            }
        }

        // transition: 0.2s ease-out;

        .logo {
            margin-bottom: 0.5rem;
            width: 2rem;
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: end;
            margin-bottom: 0.5rem;

            position: relative;
            top: 0;
            transition: 0.2s ease-out;

            .menu-toggle {
                transition: 0.2s ease-out;
                background-color: transparent;

                .material {
                    font-size: 2rem;
                    color: #f1f5f9;
                    transition: 0.2s ease-out;
                    width: 2rem;
                }

                &:hover {
                    .material {
                        color: #4ade80;
                        transform: translateX(0.5rem);
                    }
                }
            }
        }

        h3, .button .text {
            opacity: 0;
            transition: 0.3s ease-out;
        }

        h3 {
            color: #64748b;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }
        
        .menu {
            margin: 0 -1rem;

            .button {
                align-items: center;
                text-decoration: none;

                padding: 0.5rem 1rem;
                transition: 0.2s ease-out;

                .material {
                    font-size: 2rem;
                    color: #f1f5f9;
                    transition: 0.2s ease-out;
                }

                .text {
                    color: #f1f5f9;
                    transition: 0.2s ease-out;
                }

                &:hover, &.router-link-exact-active {
                    background-color: #334155;
                    
                    .material, .text {
                        color: #4ade80;
                    }
                }

                .router-link-exact-active {
                    border-right: 5px solid #4ade80;
                }
            }
        }

        &.is-expanded {

            .menu-toggle-wrap {
                top: -3rem;
                .menu-toggle {
                    transform: rotate(-180deg);
                }
            }

            h3, .button .text {
                opacity: 1;
            }

            .button {
                display: flex;
                .material {
                    margin-right: 1rem;
                }
            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        };
    };

</style>