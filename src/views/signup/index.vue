<template>
    <div class="pl-5 pt-5 bg-gray-100">
        <router-link to="/">
            <button
                class="bg-[#00296B] hover:bg-[#00509D] hover:text-[#FFD500]  text-white rounded-full font-bold shadow  py-2 px-6  ">Back
            </button>
        </router-link>
    </div>

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-3 mx-4  text-left text-white bg-[#00296B] shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 rounded-lg">
            <h3 class="text-2xl font-bold text-center">SIGN UP</h3>
            <form action="">
                <div class="mt-4">
                    <div>
                        <label class="block" for="Name">Nama Tim</label>
                        <input type="text" placeholder="Nama Tim"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block" for="email">Email</label>
                        <input type="text" placeholder="Email"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block">Password</label>
                        <input type="password" placeholder="Password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block">Confirm Password</label>
                        <input type="password" placeholder="Password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block" for="Name">No. Telepon</label>
                        <input type="text" placeholder="No. Telepon"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="flex items-center justify-center mt-6">
                        <button class=" px-3 py-2  text-black bg-white rounded-lg hover:bg-gray-500">Create
                            Account</button>
                    </div>
                    <div class="mt-6 flex items-center justify-center text-grey-dark">
                        Sudah punya akun ?
                        <router-link to=/signin>
                            <a class="text-blue-600 hover:underline" href="#">
                                Sign In
                            </a>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>