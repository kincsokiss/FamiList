<template>
    <ion-menu content-id="main-content" class="is-expanded">
      <ion-header>
        <ion-toolbar>
            <!-- <ion-icon :icon="listCircleOutline" size="large" class="logo"></ion-icon> -->
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
                    <router-link to="/user-detail-page" class="button">
                        <ion-icon :icon="settingsOutline" class="material"></ion-icon>
                        <span class="text">User Settings</span>
                    </router-link>
                </div>
            </nav>
        </div>
      </ion-content>
    </ion-menu>
</template>

<script setup>
    import { settingsOutline, homeOutline } from 'ionicons/icons';
    import { IonMenu, IonHeader, IonToolbar, IonContent, IonIcon } from '@ionic/vue';
        
</script>

<style lang="scss" scoped>

    ion-menu {
        .material {
            font-size: 2rem;
            color: #f7d6c5;
            width: 2rem;
        }

        &:hover {
            .material {
                color: #312b27;
            }
        }



        
        .menu {
            margin: 0 -1rem;

            .button {
                align-items: center;
                text-decoration: none;

                padding: 0.5rem 1rem;
                font-size: 150%;

                .text {
                    color: #191514;
                }

                &:hover, &.router-link-exact-active {
                    
                    .material, .text {
                        color: #d87f79;
                    }
                }

                .router-link-exact-active {
                    border-right: 5px solid#4d433d;
                }
            }
        }

        &.is-expanded {

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