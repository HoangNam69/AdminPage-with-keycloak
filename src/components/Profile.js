import React, { useEffect, useState } from "react";
import keycloak from "../keycloak";
import { getMyProfile } from '../services/userService'

function Profile() {
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const response = await getMyProfile();
      const data = response.data;

      setProfile(data.result);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (keycloak.authenticated) {
      getProfile();
    }
  }, []);

  return (
    <div className="profile-wrap">
      <div className="profile">
        <div className="profile-avatar">
          <svg width="196" height="227" viewBox="0 0 196 227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M193.229 75.481C190.169 84.193 182.687 90.444 176.919 97.655C171.151 104.865 166.95 115.124 171.542 123.135C174.003 127.428 178.487 130.106 181.831 133.753C187.136 139.538 189.383 147.979 187.657 155.635C185.931 163.291 180.278 169.952 173.004 172.9C167.748 175.03 161.638 175.398 157.214 178.946C152.431 182.781 150.903 189.263 148.018 194.671C141.102 207.637 124.529 214.557 110.446 210.358C99.8386 207.195 91.1826 198.685 80.2646 196.862C67.9476 194.805 55.7226 201.726 43.2506 201.116C27.8526 200.362 14.5266 187.132 11.9516 171.933C9.64257 158.303 14.7986 144.086 11.6756 130.619C9.29157 120.337 3.27157 111.224 1.07257 100.9C-2.24543 85.325 1.83756 67.973 17.4976 57.24C23.5336 53.103 29.6926 49.223 36.5926 46.785C70.2936 34.875 101.675 40.234 136.057 32.76C171.269 25.105 204.171 44.324 193.229 75.481Z" fill="#DDDCFE" />
            <path d="M116.534 133.096L97.3224 132.321V132.279L96.7964 132.3L96.2704 132.279V132.321L77.0584 133.096C77.0584 133.096 76.4364 137.274 75.3994 143.016C89.7524 148.916 104.966 152.722 120.41 154.231C118.103 143.622 116.534 133.096 116.534 133.096Z" fill="#2E306D" />
            <path d="M96.3654 189.896C115.361 189.896 124.631 178.044 128.471 170.984C125.779 169.462 123.821 167.553 123.074 164.98C122.118 161.688 121.219 157.955 120.409 154.232C104.965 152.722 89.7514 148.917 75.3984 143.017C74.2114 149.591 72.4814 158.217 70.5174 164.981C69.6774 167.873 67.3154 169.93 64.0884 171.535C68.2574 178.762 77.6964 189.896 96.3654 189.896Z" fill="#EA9C8B" />
            <path d="M167.63 186.644C161.115 176.871 139.037 176.956 128.471 170.984C124.631 178.044 115.362 189.896 96.3655 189.896C77.6975 189.896 68.2575 178.762 64.0895 171.534C53.1785 176.962 32.2715 177.18 25.9625 186.644C17.7875 198.907 10.0205 226.703 10.0205 226.703H96.2705H97.3225H183.573C183.573 226.703 175.805 198.907 167.63 186.644Z" fill="#2E306D" />
            <path d="M42.2256 105.787C50.8495 105.787 57.8406 98.796 57.8406 90.172C57.8406 81.5481 50.8495 74.557 42.2256 74.557C33.6017 74.557 26.6106 81.5481 26.6106 90.172C26.6106 98.796 33.6017 105.787 42.2256 105.787Z" fill="#EA9C8B" />
            <path d="M42.2256 100.65C48.0124 100.65 52.7036 95.9589 52.7036 90.172C52.7036 84.3852 48.0124 79.694 42.2256 79.694C36.4387 79.694 31.7476 84.3852 31.7476 90.172C31.7476 95.9589 36.4387 100.65 42.2256 100.65Z" fill="#EA9C8B" />
            <path d="M151.366 105.787C159.99 105.787 166.981 98.796 166.981 90.172C166.981 81.5481 159.99 74.557 151.366 74.557C142.743 74.557 135.751 81.5481 135.751 90.172C135.751 98.796 142.743 105.787 151.366 105.787Z" fill="#EA9C8B" />
            <path d="M151.366 100.65C157.153 100.65 161.844 95.9589 161.844 90.172C161.844 84.3852 157.153 79.694 151.366 79.694C145.58 79.694 140.888 84.3852 140.888 90.172C140.888 95.9589 145.58 100.65 151.366 100.65Z" fill="#EA9C8B" />
            <path d="M150.891 98.1332C155.739 68.2638 135.454 40.1202 105.585 35.2726C75.7158 30.425 47.5722 50.7091 42.7246 80.5785C37.877 110.448 58.1611 138.591 88.0305 143.439C117.9 148.287 146.043 128.003 150.891 98.1332Z" fill="#EA9C8B" />
            <path d="M82.3735 83.92C82.3735 86.842 80.0045 89.211 77.0825 89.211C74.1605 89.211 71.7915 86.842 71.7915 83.92C71.7915 80.998 74.1605 78.629 77.0825 78.629C80.0045 78.629 82.3735 80.998 82.3735 83.92Z" fill="#2E306D" />
            <path d="M64.2776 80.43C65.3976 78.779 66.8056 77.316 68.3706 76.034C69.9576 74.779 71.7186 73.726 73.5936 72.906C75.4636 72.101 77.4416 71.35 79.5226 71.277C81.5836 71.191 83.6846 71.467 85.5556 72.352L85.5216 72.552C83.4936 72.776 81.6066 72.955 79.7376 73.29C77.8876 73.637 75.9926 73.823 74.1676 74.421C72.3476 75.004 70.5896 75.821 68.9566 76.86C67.3026 77.871 65.7916 79.128 64.4336 80.558L64.2776 80.43Z" fill="#2E306D" />
            <path d="M111.224 83.92C111.224 86.842 113.593 89.211 116.515 89.211C119.437 89.211 121.806 86.842 121.806 83.92C121.806 80.998 119.437 78.629 116.515 78.629C113.593 78.629 111.224 80.998 111.224 83.92Z" fill="#2E306D" />
            <path d="M129.163 80.557C127.805 79.127 126.293 77.87 124.639 76.859C123.007 75.82 121.249 75.003 119.43 74.42C117.605 73.823 115.709 73.637 113.859 73.289C111.991 72.954 110.104 72.775 108.076 72.551L108.042 72.351C109.913 71.466 112.013 71.19 114.074 71.276C116.155 71.35 118.134 72.1 120.004 72.905C121.879 73.725 123.64 74.778 125.227 76.033C126.792 77.315 128.199 78.778 129.319 80.429L129.163 80.557Z" fill="#2E306D" />
            <path opacity="0.5" d="M124.415 111.019C130.593 111.019 135.602 107.742 135.602 103.699C135.602 99.6563 130.593 96.379 124.415 96.379C118.236 96.379 113.228 99.6563 113.228 103.699C113.228 107.742 118.236 111.019 124.415 111.019Z" fill="#EA9C8B" />
            <path opacity="0.5" d="M69.7214 111.019C75.8998 111.019 80.9084 107.742 80.9084 103.699C80.9084 99.6563 75.8998 96.379 69.7214 96.379C63.543 96.379 58.5344 99.6563 58.5344 103.699C58.5344 107.742 63.543 111.019 69.7214 111.019Z" fill="#EA9C8B" />
            <path d="M47.9684 41.063C47.9684 41.063 37.8974 39.473 32.5964 45.833C27.2964 52.194 34.4514 76.046 34.4514 76.046L42.2254 74.556L41.6074 87.442C51.5894 78.612 56.5704 65.754 55.5634 52.465C61.0444 56.464 67.2024 59.12 73.9804 59.43C80.7584 59.74 87.5294 58.492 94.0404 56.581C101.074 54.517 107.913 51.668 115.146 50.477C122.379 49.286 130.322 49.965 136.18 54.373C136.62 60.241 137.141 66.3 138.867 71.926C140.593 77.552 143.354 82.941 147.451 87.164C147.733 84.25 148.191 80.82 148.473 77.906C150.664 76.704 153.099 75.405 155.569 75.78C155.569 75.78 161.4 59.083 158.219 50.602C155.038 42.121 142.317 43.711 142.317 43.711C142.317 43.711 148.943 30.725 139.402 21.979C129.861 13.233 107.167 18.539 94.6124 18.799C63.6514 19.439 45.8604 0 45.8604 0C41.5704 3.551 39.7274 10.162 39.7114 15.731C39.6854 24.944 41.8004 34.222 47.9684 41.063Z" fill="#2E306D" />
            <path d="M107.771 121.365C108.595 120.293 109.135 119.233 109.378 118.379C109.838 116.762 109.872 114.966 109.145 113.45C108.418 111.934 106.831 110.777 105.152 110.86C101.325 111.05 99.0096 116.559 94.8096 114.639C91.7076 113.221 88.9035 108.313 84.9195 111.29C83.6465 112.241 83.0835 113.944 83.2205 115.528C83.3565 117.112 84.1045 118.586 85.0355 119.874C85.6265 120.692 86.4115 121.575 87.3025 122.418C93.6575 119.505 101.151 119.121 107.771 121.365Z" fill="#2E306D" />
            <path d="M87.3025 122.418C89.1375 124.153 91.4295 125.713 93.4585 126.154C100.548 127.695 105.373 124.485 107.771 121.366C101.151 119.121 93.6575 119.505 87.3025 122.418Z" fill="#EF3A3A" />
            <g opacity="0.5">
              <path d="M143.461 47.604C143.381 48.709 143.28 49.805 143.264 50.904C143.216 51.999 143.211 53.094 143.272 54.181C143.392 56.354 143.68 58.511 144.294 60.578C144.884 62.646 145.809 64.615 147.007 66.408C147.606 67.306 148.295 68.147 149.065 68.913C149.814 69.705 150.671 70.39 151.579 71.025C150.557 70.59 149.617 69.97 148.732 69.281C147.867 68.565 147.083 67.75 146.379 66.868C144.971 65.099 143.964 63.027 143.323 60.86C142.705 58.687 142.433 56.427 142.498 54.191C142.55 51.955 142.871 49.741 143.461 47.604Z" fill="#C6C5FE" />
              <path d="M149.642 45.9771C149.613 49.3151 150.163 52.553 151.346 55.576C152.512 58.606 154.289 61.3661 156.559 63.8141C153.751 61.9711 151.635 59.099 150.403 55.941C149.186 52.778 148.813 49.2311 149.642 45.9771Z" fill="#C6C5FE" />
              <path d="M38.5505 70.846C39.4745 70.29 40.3635 69.695 41.1635 68.996C41.9815 68.323 42.7375 67.581 43.4155 66.776C44.7725 65.17 45.9045 63.382 46.7275 61.456C47.5725 59.537 48.1135 57.49 48.4645 55.405C48.6415 54.361 48.7485 53.303 48.7995 52.238C48.8845 51.173 48.8735 50.102 48.8685 49.023C49.1015 50.078 49.2125 51.156 49.2955 52.239C49.3445 53.323 49.3245 54.412 49.2365 55.501C49.0595 57.678 48.5215 59.835 47.6555 61.859C46.7675 63.874 45.5435 65.751 43.9855 67.302C43.2065 68.075 42.3635 68.782 41.4585 69.392C40.5355 69.974 39.5745 70.495 38.5505 70.846Z" fill="#C6C5FE" />
              <path d="M34.4536 63.058C36.1686 60.619 37.5826 58.077 38.5736 55.35C39.5856 52.63 40.1576 49.779 40.4376 46.811C40.9636 49.76 40.5556 52.865 39.5226 55.7C38.4686 58.526 36.7656 61.152 34.4536 63.058Z" fill="#C6C5FE" />
              <path d="M135.656 45.121C135.362 42.624 133.559 40.613 131.463 39.417C129.349 38.173 126.945 37.54 124.512 37.297C119.635 36.736 114.709 37.46 109.968 38.671C105.212 39.896 100.576 41.554 95.8767 43.099C91.1767 44.621 86.3687 45.985 81.3927 46.497C76.4397 46.998 71.2667 46.502 66.6547 44.457C64.3447 43.472 62.1887 42.156 60.2207 40.615C58.2417 39.084 56.4557 37.315 54.8867 35.377C51.7127 31.519 49.4137 27.023 47.7717 22.355C46.1627 17.663 45.1687 12.794 44.5857 7.89502C45.3947 12.76 46.4847 17.591 48.2377 22.186C49.9587 26.779 52.3057 31.164 55.4837 34.879C58.6447 38.58 62.5337 41.728 67.0157 43.611C71.4767 45.556 76.4587 46.005 81.2927 45.492C86.1517 45.023 90.9107 43.711 95.5947 42.225C100.282 40.733 104.946 39.04 109.783 37.92C114.597 36.787 119.623 36.135 124.573 36.809C127.032 37.13 129.491 37.857 131.602 39.191C132.655 39.854 133.625 40.674 134.354 41.688C135.085 42.693 135.56 43.888 135.656 45.121Z" fill="#C6C5FE" />
              <path d="M50.7805 8.90503C52.0455 17.636 57.7665 25.577 65.7175 29.194C69.6555 31.032 74.0305 31.93 78.3595 31.709C82.7045 31.473 86.9185 30.148 91.0315 28.633C95.1625 27.143 99.2685 25.439 103.598 24.359C107.909 23.281 112.396 22.73 116.849 23.091C121.292 23.422 125.695 24.654 129.561 26.874C133.404 29.1 136.744 32.279 138.814 36.194C137.675 34.304 136.273 32.585 134.667 31.091C133.048 29.612 131.251 28.331 129.319 27.307C125.472 25.215 121.15 24.099 116.796 23.867C112.439 23.636 108.052 24.146 103.825 25.251C99.5885 26.337 95.5295 28.056 91.3765 29.582C87.2245 31.078 82.9045 32.413 78.4045 32.627C73.9215 32.812 69.3875 31.898 65.3815 29.893C61.3595 27.929 57.8625 24.922 55.3395 21.251C52.8175 17.585 51.2165 13.298 50.7805 8.90503Z" fill="#C6C5FE" />
            </g>
            <path d="M104.015 103.764C101.982 105.272 99.5266 105.928 97.1066 105.941C94.6866 105.954 92.2896 105.352 89.9856 104.502C90.2496 99.844 90.5116 95.015 91.6106 90.522C92.7096 86.029 94.4306 81.694 96.9726 78.052C99.2626 81.724 100.907 85.905 101.978 90.252C103.049 94.598 103.534 99.28 104.015 103.764Z" fill="#EA9C8B" />
          </svg>
        </div>
        <div className="profile-info__group">
          <div className="profile-info">
            <div className="profile-info__label">Username:</div>
            <div className="profile-info__content">{profile.username}</div>
          </div>
          <div className="profile-info">
            <div className="profile-info__label">Email:</div>
            <div className="profile-info__content">{profile.email}</div>
          </div>
          <div className="profile-info">
            <div className="profile-info__label">Firstname:</div>
            <div className="profile-info__content">{profile.firstName}</div>
          </div>
          <div className="profile-info">
            <div className="profile-info__label">Lastname:</div>
            <div className="profile-info__content">{profile.lastName}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;